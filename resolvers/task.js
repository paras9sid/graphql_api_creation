const uuid = require('uuid');
const { users , tasks,myCar } = require('../constants');

module.exports = {
    Query :{ 
        tasks:()=> {
            console.log(tasks);
            return tasks
        },
        task:(_,{id}) => {
            console.log(typeof id);
            return tasks.find(task => task.id === id)
        }, // destructure from args to {id}
       
    },

    // Defining Mutation Object
    Mutation: {  
        createTask: (_,{ input })=>{  // installed uuid library for unique id generation
            const task = { ...input , id:uuid.v4() };
            tasks.push(task);
            return task;
        }
    },


    //Task object type to be shown in the output in interface of graphql
        Task :{
            // user:(parent)=> users.find(user => user.id == parent.userId) //or destructure like stmt below
            user:( {userId} ) => {
                console.log('userId',userId);
                return users.find(user => user.id === userId)
            }
            //field level resolver > query level resolver
            // name: () => "Test-task" // by default name of each tasks changed to Test-task explicitily--Value overrided
        }
};
