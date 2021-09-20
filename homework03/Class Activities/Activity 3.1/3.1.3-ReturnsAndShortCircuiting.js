// ? what does the function below return?
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  return num;
}

// change the function above to return a value
console.log(myNumberFunction());

// Short Circuiting
// ! the console.log will not print
function shortCircuitFunction() {   // return is immediate and without console log so no output.
                                    // And console log later no output because of first short
                                    //circuit
  return "Zap! - Short Circuited!";
  console.log(
    "This will never print because it is after the return statement."
  );
}
shortCircuitFunction();       // Will not print anything as described above..

// ? will the following function short circuit?
let height = 50;
function checkCircusRides() {

  if (height < 48) {
    return console.log( "Take a ride on the carousel!");
  }
  if (height < 60) {

    return console.log("Try the bumper cars!"); // Function will short circuit here when the
                                                // height is >= 48 and < 60
  }
  return console.log("Enjoy the roller coaster!");
}
// change the function above to use short circuiting
checkCircusRides()                              // Prints "Try the bumper cars!"
