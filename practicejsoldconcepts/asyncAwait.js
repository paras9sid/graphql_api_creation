// promises

const displayMessage = (message) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // if(message === 'Wassup?'){
            //     return reject('Something Went wrong');
            // }// comment so that greetings function get executed
            return resolve(message); // return because code doesnt get further
        },3000);
    });
}

//working with promises -- displaying in terminal -- asynchronus code not properly readable

// displayMessage('Hello').then(result => {
//     console.log('Result = ',result);

//     displayMessage('There?').then(result => {
//         console.log('result',result);

//         displayMessage('Wassup?').then(result =>{
//             console.log('result',result);
//         }).catch(error => {
//             console.log('Error',error);
//         });

//     }).catch(error => {
//         console.log('Error',error);
//     });
// }).catch(error => {
//     console.log('Error',error);
// }); --> new asyncawait code more readable below

// async await makes code more readable and they work with promises only

//whenever function has await keyword in it, async should be put before function

// async to normal fucntion aplied
const greetings = async()=>{   // whenever async applied to nrmal function value returned is not simple value
    return 'Hey'   // it is returned as promise -- it will try to resolve this value as promise
}



const myFunction = async () => {

    //try catch with async await
    try{
        let result = '';
        result = await displayMessage('Hello');
        console.log(result);
        result = await displayMessage('There?');
        console.log(result);
        result = await displayMessage('Wassup?');
        console.log(result);
        result = await greetings();
        console.log(result);
    }catch(error){
        console.log('Error',error); // error example by putting in top code reject message
    }

}


myFunction();

//await works in two conditions -- 1. if promise is returned or 2. async is put before function in working with await
//ie functions is returning a promise or function is an async function

