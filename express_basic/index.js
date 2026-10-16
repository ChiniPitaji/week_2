// // function calculateSum(n){
// //     let ans = 0;
// //     for(let i = 1; i <= n; i++){
// //         ans += i;
// //     }
// //     return ans;     
// // }

// // let ans = calculateSum(5);
// // console.log(ans);

// //------------------------------------
// //springboot in java is same as express in nodejs
// //doctor 1
// const express = require('express');

// function calculateSum(n){
//     let ans = 0;
//     for(let i = 1; i <= n; i++){
//         ans += i;
//     }
//     return ans;     
// }

// //exposing the doctor one functionality(kideney surgery,brain surgery),doctor could have multiple rooms inside hteir hospital,this is one of them 
// const app=express();
// app.get("/",function(req,res){
//     const n=req.query.n;
//     const ans=calculateSum(n);
//     res.send(ans);
// })

// app.listen(3000); //deciding the address of the clinic

// // this one is like another room in the same hospital for another doctor
// //doctor 2
// const express = require('express');

// function calculateSum(a, b){
//   return a + b;
// }

// const app =express();
// app.get("/",function(req,res){
//     const a=req.query.a;
//     const b= req.query.b;
//     const ans=calculateSum(a,b);
//     res.send(ans);
// })

// app.listen(3001); 






//creating an http server
//express
//node default library  =>0

// const express =require("express");

// const app = express();


// function sum(n){
//     let ans =0;
//     for(let i=0;i<=n;i++){
//         ans=ans+i;
//     }
//     return ans;
// }
// app.get("/",function(req,res){
//     const n=req.query.n;
//     const ans=sum(n);

//     res.send("Hello your ans is :"+ ans); //http://localhost:3000/?n=14 --> ?n=(anything is the query for the n that is being given)
// })


// app.listen(3000);
