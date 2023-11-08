// Write a function that returns a promise that resolves with "Hello, World!" after a 2-second delay.

const solutionDelayedHello = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Resolve the promise with the string "Hello, World!" after a delay
      resolve("Hello, World!");
    }, 2000);
  });
};

// Call the delayedHello function and handle the promise
solutionDelayedHello()
  .then(message => {
    // Display the message in 'workbookResult' div
    document.getElementById('solutionResult').innerText = message;
  })
  .catch(error => {
    // Handle any errors here
    document.getElementById('solutionResult').innerText = error;
  });
