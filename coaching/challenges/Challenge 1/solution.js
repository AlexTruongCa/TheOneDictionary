// solution.js
const solutionNumbers = [1, 3, 6, 8, 11, 2, 4, 5];

const solutionFilteredNumbers = numbers.filter(number => number >= 5);
const solutionMappedNumbers = filteredNumbers.map(number => number * 3);

document.getElementById('solutionResult').innerText = JSON.stringify(solutionMappedNumbers);
