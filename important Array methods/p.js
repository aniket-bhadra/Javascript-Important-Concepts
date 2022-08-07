//Higher-order function and callback function basics
// function higherOrder(callback){
    //     console.log(callback(2));
    // }
    
//1.using Arrow functions 
// higherOrder((num1)=>console.log(num1));

//2.using funciton expression
// let a =  function(num1){
    //     console.log(num1);
    // // }
//3. using function declartion
    // function a(num1){
    //     console.log(num1);
    // }


    // higherOrder(a);
    
//-----------------forEach()method---------------------------------

    // const numbers = [22,55,66,77,88];
// numbers.forEach(); 
// const person= [
//     {name:"aniket", age:21},
//     {name:"anish", age:22},
//     {name:"ishika", age:19},
//     {name:"sneha", age:25},
//     {name:"simarn", age:26}
// ]
//print the first name of each object using forEach() method
// person.forEach(function(num1){
//     console.log(num1["name"]);
// })

//print the first name of each object using for of loop
// for(let user of person){
//     console.log(user.name);
// }

//print the first name of each object using traditional forloop
// for(let user=0; user<person.length; user++){
//     let obj = person[user];
//     console.log(obj.name);
// }
//print the first name of each object using arrow function
// person.forEach(user=>{console.log(user.name)});



// const numbers=[2,55,66,88,99];
// let result =  numbers.forEach(function (num1){
//     return (num1);
// });
// console.log(numbers);  //[2,55,66,88,99]
// console.log(result);   //it returns undefined

//--------------------------map() method--------------------------------------

const person= [
    {name:"aniket", age:21},
    {name:"anish", age:22},
    {name:"ishika", age:19},
    {name:"sneha", age:25},
    {name:"simarn", age:26}
]
// const users = person.map(function(user){
//     return user.name;
// })
// console.log(users);
//now create a new array from this array where each element is represented as name + age

const newArr = person.map(function(user){
    return `${user.name} ${user.age}`;    //OR
    // return user.name + " " + user.age;
})
console.log(newArr);

//so the difference is--it returns a new array & the elements of that array are result of the callback function that is being called once for each and every element. 

