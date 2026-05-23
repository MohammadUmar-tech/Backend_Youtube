// async function getUser(){

//     const response=await fetch(`https://jsonplaceholder.typicode.com/users`)
//     const data=await response.json();
//     console.log(data);

// }
// getUser();
// console.log("My name is Ghost")


//Doing Same thing with the .then and .catch 

// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((response)=>response.json())
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log("Something Bad Happen")
// })

// console.log("My name is Ghost")


// const promiseOne=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     console.log("MY name is Ghost")
//     let err=false;
//     if(!err){
//          resolve({username:'Ghost',Password:"Dagistan"})
//     }
//    else{
//     reject("Something went wrong")
//    }
// },1000)
// })
// promiseOne
// .then((Response)=>{
//     console.log(Response)
// }).catch((err)=>{
// console.log('The Error is ',err);
// })
// async function consume() {
// try {
//     const response=await promiseOne
//     console.log(response);
// } 
// catch (error) {
//     console.log(error)
// }
// }
// consume();