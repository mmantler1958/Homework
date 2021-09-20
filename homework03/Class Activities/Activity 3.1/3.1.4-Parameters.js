// Named Parameters
// write a function that takes two named parameters:

// print each named parameter,
// function twoParams(paramA, paramB) {
//   console.log(`paramA=${paramA} paramB=${paramB}`)
//   return paramA + paramB;
// }
// twoParams(1, 2);                 // Print params

// // then return the parameters added together
// // invoke the function and pass in two numbers

// console.log(twoParams(1, 2));     //Prints 3

// invoke the function and pass in more than two numbers

// twoParams(1, 2, 3, 4);

// // invoke the function and pass in only one number

// twoParams(1);       // Outputs paramA, and undefined for paramB

// change the function to set default values for the parameters

// function twoParams(paramA=80, paramB=20) {
//   console.log(`paramA=${paramA} paramB=${paramB}`)
//   return paramA + paramB;
// }
// again, invoke the function and pass in only one number
// twoParams(2);
// Rest Operator
// add a rest operator to the function's parameters
// function twoParams(paramA=22, paramB=33,...others) {
//   return paramA + paramB;
// }
// console.log(twoParams(1));
// add a line to the function's body to print the value of the rest operator
// function twoParams(paramA=80, paramB=20,...others) {
//   console.log(`paramA=${paramA} paramB=${paramB} others=${others}`)
//   return paramA + paramB;
// }
// // again, invoke the function and pass in more than two numbers
// twoParams(1, 2, 3, 4, 5, 6);
