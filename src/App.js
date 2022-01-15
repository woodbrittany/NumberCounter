import React, { useState } from 'react'; 
import './App.css';

function App(){
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(isRed);
};

return(
    <div className="app">
    <h1 className={isRed ? "red" : ""}>Number Counter</h1>
    <button onClick={increment}>Increment</button>
    <h1>{count}</h1>
 </div>
  );
}

export default App;