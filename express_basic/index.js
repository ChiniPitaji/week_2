// function calculateSum(n){
//     let ans = 0;
//     for(let i = 1; i <= n; i++){
//         ans += i;
//     }
//     return ans;     
// }

// let ans = calculateSum(5);
// console.log(ans);

//------------------------------------

const express = require('express');

function calculateSum(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans += i;
    }
    return ans;     
}

//exposing the doctor one functionality(kideney surgery,brain surgery),doctor could have multiple rooms inside hteir hospital,this is one of them 
const app=express();
app.get("/",function(req,res){
    const n=req.query.n;
    const ans=calculateSum(n);
    res.send(ans);
})

app.listen(3000); //deciding the address of the clinic

// this one is like another room in the same hospital for another doctor
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