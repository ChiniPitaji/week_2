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


//----------------------------------------------------------------

// const express=require("express");

// const app= express();

// //req,res=>request and response
// app.get("/",function(req,res){
//     //200 - everything went fine 
//     //404-doctor is not in the hospital
//     //500-mid surgery light went away
        //throw new Error("ssdsdzasdsd");
//     //411-inputs were incorrect,wrong person came to surgery
//     //403 u were not allowed  into the hospital

// })

// app.listen(3000);

//-----------------------------------------


//let's create an in memory hospital
// You need to create 4 routes (4 things that the hospital can do)
// 1. GET - User can check how many kidneys they have and their health
// 2. POST - User can add a new kidney
// 3. PUT - User can replace a kidney, make it healthy
// 4. DELETE - User can remove a kidney

const express = require ("express");
const app = express();

const users=[{
    name:"Dev",
    kidneys:[{
        healthy:false
    }]
}];

app.get("/",function(req,res){
    //write logic 
    const DevKidneys=users[0].kidneys;
    const numberOfKidneys=DevKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0;i<DevKidneys.length;i++){
        if(DevKidneys[i].healthy){
            numberOfHealthyKidneys=numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

// "numberOfKidneys":1,"numberOfHealthyKidneys":0,"numberOfUnhealthyKidneys":1} output on the localhost port

app.use(express.json()); //to pass and get json body to the server

app.post("/",function(req,res){
    // console.log(req.body); //undefined // hence concepts of middlewares came
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
    //this message will pop up when we send the post request and the number of time we sent the post the numbers of kidneys count also get increased...
})


app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
    //{} this will be the output as nothing is getting as put but the number of kidneys and healthy kidenys is changing 
})


 //removing all the unhealthy kidneys
app.delete("/",function(req,res){
    //you should return a 411
    //only if atleast one unhealthy kidney is there to do this,else return 411

    // let atleastOneUnhealthyKidney=false;
    // for(let i=0;i<users[0].kidneys.length;i++){
    // if(!users[0].kidneys[i].healthy){
    //     atleastOneUnhealthyKidney=true;
    //     }
    // }

    if(isThereAtleastOneUnhealthyKidney()){
   const newKidneys=[];
   for(let i=0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy){
        newKidneys.push({
            healthy:true
        })
    }
   }
   users[0].kidneys=newKidneys;
   res.json({
    mdg:"DONE"
   })
}else{
    res.status(411).json({
        msg:"You have no bad kidneys"
    });
}

function isThereAtleastOneUnhealthyKidney(){
      let atleastOneUnhealthyKidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
    if(!users[0].kidneys[i].healthy){
        atleastOneUnhealthyKidney=true;
        }
    }  
    return atleastOneUnhealthyKidney;
}
app.listen(3000);