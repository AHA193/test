import React, { useEffect, useLayoutEffect } from 'react'
import './App.css'

function App() {  

useEffect(()=>{
  console.log('Message from useEffect');
},[])

useLayoutEffect(()=>{
  console.log('Message from useLayoutEffect');
},[])

  return (    
<>
<h2>TestMessage</h2>
</>
  );
}

export default App
