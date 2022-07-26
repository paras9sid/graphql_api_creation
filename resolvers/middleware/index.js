const { skip } = require('graphql-resolvers');
const Car = require('../../models/car');
const {isValidObjectId} = require('../../config/mongoose');

module.exports.isAuthenticated = (_, __, { email }) => {
     if(!email){
        throw new Error('Access Denied! Please login to continue!');
    }
    return skip; // it will call the next resolver
}

module.exports.isTaskOwner = async(_, { id },{ loggedInUserId }) => {
    try{
        if(!isValidObjectId(id)){
            throw new Error('Invalid Car number');

        }
    const myCarByNumber = await Car.findById(id);
    if(!myCarByNumber){
        throw new Error('Car not found!');
    }else if(myCarByNumber.user.toString() !== loggedInUserId){
        throw new Error('Not authorized as Car Owner');
    }
    return skip; // it will call the next resolver
    }catch(error){
        console.log(error);
        throw error;
    }
}