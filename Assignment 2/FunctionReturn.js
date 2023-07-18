/*===================================================================================================================
                                            ES6 Function Return
 ===================================================================================================================*/



 //Snippet 1 :

const add = (a, b) => {

  return a + b;

};

const result1 = add(3, 4);

console.log(result1); // result: 7

// Question 1: What is the value of the result1?
// ans: 7



// Snippet 2 :

const greet = (name) => {

  return {name};
};

const message = greet("Alice");

console.log(message); // result: { name: 'Alice'}

// Question 2: What is the value of the message? 
//ans: { name: 'Alice'}




// Snippet 3 :

const calculateArea = (radius) => {

  const PI = 3.14159;

  const area = PI * radius * radius;

  return area;

};

const area = calculateArea(5);

console.log(area); // result: 78.53975

// Question 3: What is the value of area? 
//ans: 78.53975




// Snippet 4 :

const multiply = (a, b) => a * b;

const result2 = multiply(2, 5);

console.log(result2); // result: 10

// Question 4: What is the value of the result2?
// ans: 10




//Snippet 5 :

const isEven = (num) => {

  if (num % 2 === 0) {

    return true;

  } else {

    return false;

  }

};

const evenNumber = isEven(8);

console.log(evenNumber); // result: true

// Question 5: What is the value of evenNumber?
// ans: true




// Snippet 6 :

const sayHello = () => {

  return "Hello!";

};

const hello = sayHello();

console.log(hello); // result: Hello!

// Question 6: What is the value of hello?
//ans: Hello!



// Snippet 7 :

const calculateSquare = (num) => num * num;

const squaredNumber = calculateSquare(4);

console.log(squaredNumber); // result: 16

// Question 7: What is the value of squaredNumber?
//ans: 16





// Snippet 8 :

const divide = (a, b) => {

  if (b === 0) {

    return "Error: Division by zero.";

  }

  return a / b;

};

const result3 = divide(10, 2); 

const result4 = divide(8, 0);

console.log(result3); // result: 5

console.log(result4); // result: Error: Division by zero.

// Question 8: What are the values of result3 and result4?
/* ans: 1. 5   and 
        2. Error: Division by zero.*/