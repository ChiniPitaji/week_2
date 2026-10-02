// //approach 1 (wrapping another async function)

// function myOwnSetTimeout(fn, duration) {
//     setTimeout(fn, duration);
// }

// myOwnSetTimeout(function(){
//     console.log("heyyyy");
// },1000)


// //this approach uses a callback  ,here have created a function where other people can send a callback. this is good but leads to callback hell

// setTimeout(function () {
//     console.log("heyyyy");

//     setTimeout(function () {
//         console.log("inside the second one");
//     }, 2000)
// }, 1000)

//approach 2 (using promises)

function myOwnSetTimeout(duration) {
    let p=new Promise(function (resolve) {
        setTimeout(resolve,1000);
    });
    return p;
}

myOwnSetTimeout(1000)
    .then(function () {
        console.log("log the first thing");
    });