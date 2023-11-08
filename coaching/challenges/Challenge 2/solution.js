// solution.js
let solutionState = { count: 0 };

const solutionSetState = (newState) => {
  solutionState = { ...solutionState, ...newState };
  solutionRender();
};

const solutionIncrementCount = () => {
  solutionSetState({ count: solutionState.count + 1 });
};

const solutionRender = () => {
  document.getElementById('solutionResult').innerHTML = `
    <div>
      <p>Count: ${solutionState.count}</p>
      <button onclick="solutionIncrementCount()">Increment</button>
    </div>
  `;
};

solutionRender();
