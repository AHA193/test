import React, { useEffect, useState, useRef } from 'react'
import './App.css'


// 3  UseRef
// ex2  now we will learn about the another use of useRef hook that is accessing the Dom element 
// (selon 2 comportements l.13 selection de l'objet au hint sur le bouton & l.14 + avec un changement d'état)
// hint 1) <input type="text" >
// hint 2) <input type="text" style="background: blue;">

function App() {  
  const inputElem = useRef()

const btnClicked = ()=>{
  console.log(inputElem.current);
  inputElem.current.style.background = "blue";
}

  return (    
    <>  
    <input type="text" ref={inputElem}/>  
    <button onClick={btnClicked}>Click Here</button>
    </>
  );
}

export default App;
