// function square(n) {
//   return n * n;
// }

// function cube(n) {
//   return n * n * n;
// }

// function sumOfSquares(a, b) {
//   let square1 = square(a);
//   let square2 = square(b);
//   return square1 + square2;
// }

// function sumOfCubes(a, b) {
//   let cube1 = cube(a);
//   let cube2 = cube(b);
//   return cube1 + cube2;
// }
// let ans = sumOfCubes(1, 2);
// console.log(ans);

//here the problem is don't repeat yourself as the logic of both are same ,if there a new function quad comes again additional 4-5 lines of code




function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSomething(a, b,fn) {
  let cube1 = fn(a);
  let cube2 = fn(b);
  return cube1 + cube2;
}
//functional arguments
let ans = sumOfSomething(1, 2,cube);
console.log(ans);