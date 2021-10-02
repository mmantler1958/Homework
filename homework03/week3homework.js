//  Pizza Place Functions
//  Step 1
const pizzaToppings = ['shrimp', 'ham', 'mushroom', 'onion'];

// //  Step 2
function greetCustomer() {
  let greeting = 'Welcome to Pizza House, our toppings are: ';
  greeting = greeting + listToppings(pizzaToppings);
  console.log(greeting);
}
// BONUS;
function listToppings(toppingsArray) {
  let toppings = '';

  if (toppingsArray.length === 1) {
    toppings = toppingsArray[0] + '.';
    return toppings;
  }
  if (toppingsArray.length === 2) {
    toppings = toppingsArray[0] + ' and ' + toppingsArray[1] + '.';
    return toppings;
  }
  if (toppingsArray.length > 2) {
    toppingsArray[toppingsArray.length - 1] =
      'and ' + toppingsArray[toppingsArray.length - 1] + '.';
    toppings = toppingsArray.join(', ');
    return toppings;
  }

  return toppings;
}
// console.log(listToppings(['onion', 'ham', 'olive']));

greetCustomer();

// //  Step 3
// function getPizzaOrder(size, crust, toppings) {
//   let orderToppings = listToppings(toppings);

//   console.log(`One ${size} ${crust} pizza with ${orderToppings}...coming up`);
// }
//   getPizzaOrder("large", "thick", ["onion", "ham","peppers"]);
// // // Step 4
// function preparePizza() {

// }

// listToppings(pizzaToppings);
// console.log(listToppings(pizzaToppings));
// console.log(pizzaToppings);
