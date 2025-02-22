import React, { useEffect, useState } from 'react'
import './App.css'


// ex 4 UseEffect
// example so here we will display one counter that will display how many times component gets loaded

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Mr GreatStack")

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count => count+1);  
    },2000)
  },[count,name]) 

  return (
    <>
      <h1>I've rendered {count} times {name} !</h1>
    </>
  );
}

export default App;
