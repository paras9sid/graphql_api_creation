const arr1 = [1,2,3];
const arr2 = [4,5,6];

//spread operator makes a new array arr3 and doesnt change the value of old arrrays of we change new array

// const arr3 = [...arr1,...arr2];
// console.log('arr3 = ',...arr3);// outpur --> arr3 = [1,2,3,4,5,6]



// const arr4 = [arr1,arr2]; // will print result as nested array
// console.log('arr4 = ',arr4); //ooutput => arr4 =  [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] <-- nested array in arr4

//copying values and will change the orginal; one when change to new one
// const arr3 = arr1; // created as a reference to arr3

// arr3.push(6);
// console.log(arr1); // output => [ 1, 2, 3, 6 ] -- value added to arr1 as well
// console.log(arr3); // output => [ 1, 2, 3, 6 ] 

//if we dont want original array to get changed --
// 1st method slice() -- will create a new array

// const arr3 = arr1.slice();
// arr3.push(4);
// console.log(arr3); //[1,2,3,4]
// console.log(arr1); //[1,2,3]

//2md method -- spread operator use

// const arr3 = [...arr1];
// arr3.push(4);
// console.log(arr3); //[1,2,3,4]
// console.log(arr1); //[1,2,3]


//user example

const userOne = {
    name:'Sid',
    age:34,
    id:1,
    country:"India"
};

// const userTwo = userOne;
// userTwo.country = "France"; // will change country to both users-as reference is created

//1st method -- Object.assign() method

// const userTwo = {};
// Object.assign(userTwo,userOne); 
// userTwo.country = "France"; // nopw country value will not be copied to original array

//2nd method -- using spread operator

const userTwo = {...userOne, country:"France",gender:"Male"}; // created new copy not the refrence
// so values in userOne will not be changed or modified --only userTwo will be show changes


console.log('userOne =' , userOne);
console.log('userTwo = ',userTwo);