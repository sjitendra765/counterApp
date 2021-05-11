import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const increaseCounter = ()=>{
    setCounter(counter+1);
  }
  return (
    <div className="App">
      <header className="App-header">        
          Simple Counter
      </header>
      <div>
        <p>Number of clicks: <span data-testid="counter">{counter}</span> </p>
        <button data-testid="button-inc" className="click-button" onClick={()=>{increaseCounter();}}> Click</button>
      </div>
    </div>
  );
}

export default App;
