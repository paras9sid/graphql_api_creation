const uuid = require('uuid');
const { combineResolvers } = require('graphql-resolvers');

const { users , myCar} = require('../constants');

const Car = require('../models/car');
const User = require('../models/user');
const {isAuthenticated} = require('./middleware');

module.exports = {
    Query :{
       myCar:() => {
        return myCar;
    },
        myCarByNumber : (_,{reg_num}) => {
            return myCar.find(myCarByNumber => myCarByNumber.reg_num === reg_num) 
        },
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
        user:({ userId }) => {
            return users.filter(user => user.id === userId)
        }
    } 

}