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

// const person= [
//     {name:"aniket", age:21},
//     {name:"anish", age:22},
//     {name:"ishika", age:19},
//     {name:"sneha", age:25},
//     {name:"simarn", age:26}
// ]
// const users = person.map(function(user){
//     return user.name;
// })
// console.log(users);
//now create a new array from this array where each element is represented as name + age

// const newArr = person.map(function(user){
//     return `${user.name} ${user.age}`;    //OR
//     // return user.name + " " + user.age;
// })
// console.log(newArr);

//so the difference is--it returns a new array & the elements of that array are result of the callback function that is being called once for each and every element. 

//------------------------filter() method------------------------------------
// const numbers = [55,66,99,88];
// const result = numbers.filter(function(elments){
//     console.log(elments);
// })
// console.log(result); ///it returns []
// const users = [
//     {name: "aniket",age: 22},
//     {name: "simran",age: 12},
//     {name: "ishika",age: 18},
//     {name: "kira",age: 25},
//     {name: "anish",age: 35},
//     {name: "samar",age: 16},
//     {name: "juli",age: 17},
// ]
//filter out every user whose age below 18
// const user18 = user.filter(function(elements){
//     return elements.age<18;
// });
// console.log(user18);

//filter out only the user whose age above 18

//with function expression
// const age= function(user){
    
//         return user.age>=18;
// }
// const above18 = users.filter(age);
// console.log(above18);



//with function expression and map() method
// const age= function(user){
//     if (user.age>=18){
//         return user.name;
//     }
    
// }
// const above18 = users.map(age);
// console.log(above18); //(7) ['aniket', undefined, 'ishika', 'kira', 'anish', undefined, undefined]

//so the differnce is-- filter() method creates a new array and returns only the items which pass the test specified by the callback funciton.


//---------------------reduce() method----------------------------------------
// const numbers = [2,4,6,8];
// let result = numbers.reduce(function(acc,currentValue,index,arry){
//     // return acc;      
//     //return currentValue;
        //return acc + currentValue;
// })
// console.log(result);


//each time currentValue changes to the next number in array and acc changes to the return value


// acc   currentValue   return (acc+currentValue)
//  2     4               6
//  6     6               12
//  12    8               20
//now 20 wiill return to the result



//make an varible and store the total prouduct price using reduce() from a Usercart
const Usercart = [
    {productId: 1, productName: "laptop", productPrice: 50000},
    {productId: 2, productName: "tv", productPrice: 25000},
    {productId: 3, productName: "mobile", productPrice: 30000}

]
totalPrice = Usercart.reduce(function(acc,product){
    return acc + product.productPrice;
},0)
console.log(totalPrice);

//using traditional for loop
// let totalPrice =0;
// for(let i=0; i<Usercart.length; i++){
//      totalPrice += Usercart[i].productPrice;
// }
// console.log(totalPrice);

