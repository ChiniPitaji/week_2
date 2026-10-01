
// function onDone(){
//     console.log("hii chini");
// }

// setTimeout(onDone, 2000);
// console.log("after setTimeout");



//---------------------------------
const fs = require("fs");
let a = 1;
console.log(a);
fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log("data read from the file is ");
    console.log(data);
})

let ans = 0;
for (let i = 0; i < 100; i++) {
    ans = ans + i;
}
console.log(ans);