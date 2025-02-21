import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

 // Using this syntax above to declare the color state

  const [color, setColor] = useState('Red')    // où setColor est un "Setter Function"

  const changeColor = ()=>{
    setColor('Blue') 
  }
  return (
  <>
  <h1>My Favourite color is {color}!</h1>
    <button onClick={changeColor}>Blue</button>
  </>
  );
}

export default App;
