const uuid = require('uuid');
const { combineResolvers } = require('graphql-resolvers');

const { users , myCar} = require('../constants');

const Car = require('../models/car');
const User = require('../models/user');
const {isAuthenticated,isTaskOwner} = require('./middleware');

module.exports = {
    Query :{
       myCar:combineResolvers(isAuthenticated, async(_,__,{ loggedInUserId }) => {
        try{
        const myCar = await Car.find({ user: loggedInUserId });
        return myCar;
        }catch(error){
            console.log(error);
            throw error;
        }
    }),
        myCarByNumber : combineResolvers(isAuthenticated,async(_,{reg_num}) => {
            try{
            const myCarByNumber = await Car.findById(reg_num);
            return myCarByNumber;
            }catch(error){
                console.log(error);
                throw error;
            }
        }),
    },
    Car:{
        user:({userId}) => {
            console.log('userId',userId);
            users.find(user => user.id === userId)
        }
    },

    // Defining Mutation Object
    Mutation: {  
        createCar: combineResolvers(isAuthenticated,async(_, { input },{ email }) => {
            try{
            const user = await User.findOne({email});
            const myCarByNumber = new Car({...input,user:user.id});
            const result = await myCarByNumber.save();
            user.myCar.push(result.id);
            await user.save();
            return result;
            }catch(error){
                console.log(error);
                throw error;
            }
        })
    },
    Car:{
        user:async(parent)=>{
            try{
                const user = await User.findById(parent.user);
                return user;
            }catch(error){
                console.log(error);
                throw error;
            }
        }
        // user:({ userId }) => {
        //     return users.filter(user => user.id === userId)
        // }
    } 

}