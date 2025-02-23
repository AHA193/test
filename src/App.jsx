import React, { useState, useMemo } from 'react'
import './App.css'


// 4  UseMemo hook
// why we need use memo ?

function App() {  
  const [number, setNumber] = useState(0)
  const [counter, setCounter] = useState(0)


function cubeNum(num){
  console.log('Calculation done!');
  return Math.pow(num, 3)  
}

const result = useMemo(()=>cubeNum(number), [number]); // here we are simply calling this Cube number function so let 
// me remove it (cubeNum(number)) and here we will add useMemo
//CI DESSUS OU depuis: const result = useMemo(()=>{return cubeNum(number)}, [number]);





  return (    
<>
<input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
<h1>Cube of the number: {result}</h1>
<button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
<h1>Counter: {counter}</h1>
</>
  )
}

export default App
