/* Review: Array.prototype.map()
The Array.prototype.map() method returns a new array with the results of calling a function on every element in an existing array. This allows for the transformation of each element inside the array, without altering the original.

Take a look at the example below:*/

const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

/*
In this example, we’ve used the Array.prototype.map() method on array1 to generate array2. Each element in array2 is the result of appending ' ice cream' to the end of a string element in array1.

The Array.prototype.map() method is used to iterate over array1. For every element in array1, it will call upon the provided function. When the function is called upon, it receives the current element being processed as an argument. The value returned from the function will take the place of the original element in the new array.

💡 Array.prototype.map() returns a new array with altered values. It does not alter the original array. */

//Exercise 1: Applying Array.prototype.map()
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const numsX2 = nums.map((currentElement) => {
    return currentElement * [2];
});

console.log(numsX2);


// Your code here

/*
const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping);


//Exercise 3: Destructuring objects
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Your code here

const { make, model } = car;

console.log(make);
console.log(model);



//Exercise 4: Applying the spread operator on arrays
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings);



//Exercise 5: Applying the spread operator on objects
// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here
const myCar = {...car};

myCar.model = 'q7';

console.log(myCar);


/*
Exercise 6: Dynamic keys in objects
 Create an object named userProfile. 
 Define a variable named propertyName and assign a string to it (like a username, age, or email). 
 Use propertyName as a dynamic key in userProfile, assigning a relevant value.

 Your code here*/
let propertyName = "House";

let userProfile = {
  [propertyName]: "Woodland Rise"
};

console.log(userProfile);



//exercise 8: 
function describeAnimal(noun = "cat", adjective = "white") {
  console.log(`The ${noun} is ${adjective}.`);
}

describeAnimal(); 


//Exercise 9: Ternary operator
// Convert the following `if...else` statement in to a ternary:
/*
let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}
*/
// Your code here


let pizza = 'tasty';

console.log(pizza === 'tasty' ? 'yum' : 'yuck');

//Exercise 10:

const localLangConfig = null;
const LANG = localLangConfig || 'en';
console.log('Language setting:', LANG);

const userSavedTheme = null;
const USER_THEME = userSavedTheme || 'light';
console.log('User theme setting:', USER_THEME);

//Exercise 11:

const adventurer = {
  name: 'Alice',
};

let cat;

console.log(cat?.age);

