/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

// Your code here
var q1 = ["image1.png", "image2.png", "image3.png"];

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

// Your code here
var q2 = q1[0];

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

// Your code here
var q3 = q1.length;
/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */


// Your code here
var q4 = q1[q1.length];

// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

// Your code here
var q5 = [1,2,3,4];
for(var i =0; i< q5.length; ++i){
 q5[i] = q5[i] +1; 
}

/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */


// Your code here

var q6 = 0;
q5.forEach(function(val){q6 += val});
q6 = q6/q5.length;

