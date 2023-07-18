/*===================================================================================================================
                                           Anonymous Function
 ===================================================================================================================*/

 /* 1. Create an anonymous function that takes two numbers as parameters and returns their sum.

   Example Input: 3, 5
   Example Output: 8*/

   let anonymousFunction = function (num1,num2){

        let num = num1 + num2;

        return  num;

   }
    let result = anonymousFunction(3,5);  

    console.log(result); // result: 8

   //answer: 8





   /* 2. Create an array of numbers and use the `map()` method with an anonymous function to square each number in the array.

   Example Input: [1, 2, 3, 4, 5]
   Example Output: [1, 4, 9, 16, 25]*/ 

   const myArr = [1, 2, 3, 4, 5];
   const squareNumber = myArr.map(function(x){
     return x * x;
   })

   console.log(squareNumber); // result: [ 1, 4, 9, 16, 25 ]

   // output: [ 1, 4, 9, 16, 25 ]
