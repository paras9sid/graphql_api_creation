const uuid = require('uuid');
const { users , tasks,myCar } = require('../constants');


module.exports = {
    Query :{
       
        myCar:() => {
            console.log(myCar);
            return myCar
        },
        myCarByNumber: (_,{reg_num}) => {
            console.log(typeof reg_num);
            return myCar.find(myCarByNumber => myCarByNumber.reg_num === reg_num)
        },
       

    },

    // Defining Mutation Object
    Mutation: {  
        
    },


  
    Car:{
        user:( {userId} ) => {
            console.log('userId',userId);
            return users.filter(user => user.id === userId)
        }
    }
};
