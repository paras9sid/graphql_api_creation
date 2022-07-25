const user = {
    name:"sid",
    age:22,
    city:"Delhi",
    country:"India"
};

// const name = user.name;
// const country = user.country;

// console.log('name = ',name);
//console.log('country = ',country);

//destructing allos us to fetch the properties

// const {name,country} = user; // creating two const variables -- not creating object

// console.log('name = ',name);
// console.log('country = ',country);


//array

const myArr = [1,2,3,4];

//w/o destructuring
// const foo = myArr[0];
// const poo = myArr[1];
// const shoo = myArr[2];

// console.log('foo',foo);
// console.log('poo',poo);
// console.log('shoo',shoo);

// with destructuring -- decrease the no of lines -- foo ,poo , shoo const ones

const [foo,poo,shoo] = myArr; // should be array not dictionary

console.log('foo: ',foo);
console.log('poo: ',poo);
console.log('shoo: ',shoo);