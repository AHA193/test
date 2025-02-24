import React, { useCallback, useState } from 'react'
import './App.css'
import Header from './components/header';



// first we will create one counter
// and after that we'll add a button that will in increase the counter value
// Avec affichage dans la console d'un message numéroté de chaque clic 
// supplementaire sur le bouton d'incrément du compteur

function App() {  

  const [count, setCount] = useState(0);

  const newFn = useCallback((count)=>{},[count])

  return (    
<>
    <Header newFn={newFn}/>
    <h1>{count}</h1>
    <button onClick={()=>setCount(prev=>prev+1)}>Click Here</button>
</>
  )
}

export default App
