console.log(`-------------------------- 
Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
`)
/*
 * Step A: Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        Do not use numbers to reference the last element, find it programmatically.
        ages[7] - ages[0] is not allowed!
 * Step B: Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
 * Step C: Use a loop to iterate through the array and calculate the average age.
 *
 * ↓ YOUR CODE HERE ↓ */
let ages = [3, 9, 23, 64, 2, 8, 28, 93] 
console.log (`let ages = [3, 9, 23, 64, 2, 8, 28, 93]`)
console.log (`A. `)
//In order to programmatically subtract the first and last element, 
//I used the array.length-1 to symbolize the last element making it dynamic and then [0] for the first element.
let agesResult = ages[ages.length-1] - ages[0];
console.log (agesResult)
console.log (`B.`)
//Used push method to add 30 to the end of the array.
ages.push(30)
console.log (ages)
console.log (`C.`)
//Used a for loop and the addition assignment before dividing the sum from the array.length or amount of numbers
let sum = 0
for (let i=0; i < ages.length; i++) {
    sum+= ages[i];
}
let averages = sum / ages.length;
console.log(averages)
console.log(`\n-------------------------- 
Question 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
`)
/*
 * Step A: Use a loop to iterate through the array and calculate the average number of letters per name.
 * Step B: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
 *
 * ↓ YOUR CODE HERE ↓ */
let names = [`Sam`, `Tommy`, `Tim`, `Sally`, `Buck`, `Bob`]
//Used a for loop and identified the total number of letters w/ totalLetters function.
// Then divided totalLetters by array.length or amount of names.
let totalLetters = 0
for (let i=0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log (`A. `)
console.log(averageLetters)
//Ran another for loop and identified the concatenatedNames through the addition assignment and the backticks, 
//allowing for the combination of each name and a space after each name.
let concatenatedNames = '';
for (let i=0; i < names.length; i++) {
    concatenatedNames += names[i] + ' ';
}
console.log (`B. `)
console.log (concatenatedNames)
console.log(`\n-------------------------- 
Question 3: How do you access the last element of any array?
`)
/* ↓ YOUR CODE HERE ↓ */
console.log (`You can access the last element of an array using [arrayName.length-1]`)
console.log(`\n-------------------------- 
Question 4: How do you access the first element of any array?
`)
/* ↓ YOUR CODE HERE ↓ */
console.log (`You can access the last element of an array using arrayName[0]`)

console.log(`-------------------------- 
Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created 
names array and add the length of each name to the nameLengths array.
`)
/*
 * ↓ YOUR CODE HERE ↓ */
let nameLengths = []
//Created a for loop and established the length in letters of each name 
//from the previous created names,which is then console logged by the nameLengths array
for (let i=0; i < names.length; i++) {
    console.log (i) // i is the index of my loop
    console.log(names[i]) //Sam is at 0
    nameLengths.push(names[i].length);
}
console.log (nameLengths)

// this is a map method similar to the for loop above
// const namesMap = nameLengths.map((name) => {
//     let intro = `my name is `
// return intro + name
// });
// console.log(`namesMap`, namesMap)
console.log(`-------------------------- 
Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all elements in the array.
`)
/*
 * ↓ YOUR CODE HERE ↓ */
//Used a for loop and established a sum of elements to be 23.
let sumOfAllElements = 0;
for (let i=0; i < nameLengths.length; i++) {
    sumOfAllElements += nameLengths[i];
}
console.log(sumOfAllElements);

console.log(`-------------------------- 
Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
`)
/*
 * ↓ YOUR CODE HERE ↓ */
//created function called concatenateWord with word and n as parameters.
//used word.repeat(n) function to repeat the concatenated word as many times as n.
//console logged ChickenChickenChicken
function concatenateWord (word, n){
    return word.repeat(n);
}
let result = concatenateWord('Chicken', 3)
console.log(result)
    
console.log(`-------------------------- 
Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
`)
/*
 * ↓ YOUR CODE HERE ↓ */
//created function called nameOfPerson w/ firstName and lastName as the two parameters.
// used template literals for firstName and lastName to be returned.
//When tested with my name it produced Nick Green.
function nameOfPerson (firstName, lastName){
    return `${firstName} ${lastName}`;
}

let fullName = nameOfPerson(`Nick`, `Green`)
console.log (fullName)
console.log(`-------------------------- 
Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
`)
/*
 * ↓ YOUR CODE HERE ↓ */
//used the reduce method to return sum of all elements in the array.
//also used an arrow function to ensure the function returned 'true' if over 100.
function isSumGreaterThan100(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum > 100;
}
let numArray = [25, 24, 26, 27]; //equals 102 so should return 'true'.
let result2 = isSumGreaterThan100(numArray)
console.log(result2);

console.log(`-------------------------- 
Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.
`)
/*
 * ↓ YOUR CODE HERE ↓ */
function calculateAverage(numbers) {


//used reduce method again for sum of all elements in the array.
//also used arrow function and then divided sum from numbers.length for average.
if (numbers.length === 0) {
    return 0;
}

    let sum2 = numbers.reduce((acc, num) => acc + num, 0);
    return sum2 / numbers.length;
}
    let numArray2 = [18, 36, 54, 72];
    let average = calculateAverage(numArray2);
    console.log(average);

console.log(`-------------------------- 
Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the 
first array is greater than the average of the elements in the second array.
`)

/*
 * ↓ YOUR CODE HERE ↓ */

//wrote function which took 2 arrays and used reduce method to determine sum of array before finding average (sum/array.length).
//calculated the average of arr1 and arr2 and with my example below it would return 'true' as array1 is greater than array2
function isAverageGreaterThan(arr1, arr2) {
    let calculateAverage = (array) => {
        if (array.length === 0) {
            return 0;
        }
        let sum = array.reduce((acc, num)=> acc + num, 0);
        return sum / array.length;
    };
    let averageArr1 = calculateAverage(arr1);
    let averageArr2 = calculateAverage(arr2);

    return averageArr1 > averageArr2;
}

let array1 = [18, 36, 54];
let array2 = [10, 20, 30];
let result3 = isAverageGreaterThan(array1, array2);
console.log(result3);

console.log(`-------------------------- 
Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
`)
/*
* ↓ YOUR CODE HERE ↓ */
//created function willBuyDrink w/ parameters of 'isHotOutside' and if 'moneyInPocket'
// told the return to be true if isHotOutside AND moneyInPocket is greater than 10.50.
//I let hotWeather be true, money to be 15.75 and the results to = willBuyDrink(hotWeather, money)
//this allowed my answer to be 'true'
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
let hotWeather = true;
let money = 15.75;
let results = willBuyDrink(hotWeather, money);
console.log(result);