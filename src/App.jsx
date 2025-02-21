import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
// ex 3 _updating a state based on previous state

const [count, setCount] = useState(0); 


const increaseCount = ()=>{
setCount(count=>count + 1) 
setCount(count=>count + 1)   
setCount(count=>count + 1)  
setCount(count=>count + 1)    
            
}

return (
  <>
<h1>Count: {count}</h1>
<button onClick={increaseCount}>Increase by 4</button>  

  </>
  );
}

export default App;
