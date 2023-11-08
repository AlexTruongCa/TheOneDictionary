// Challenge: Given an array of numbers, create a new array that has only the numbers that are 5 or greater.
// Use the filter method. Then, for the filtered numbers, create a new array where each number is multiplied by 3.
// Use the map method. Display the final array in the 'workbookResult' div.

const numbers = [1, 3, 6, 8, 11, 2, 4, 5];

// Step 1: Filter numbers
const filteredNumbers = numbers.filter(number => number);

// Step 2: Map to new array
const mappedNumbers = filteredNumbers.map(number => number);

// Step 3: Display the result
document.getElementById('workbookResult').innerText = JSON.stringify(mappedNumbers);
