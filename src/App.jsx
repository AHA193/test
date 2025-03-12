import React, { useState } from 'react'
import './App.css'

// one simple counter that displays the count in this H1 then we have two
// buttons and we have created this counter State using the use State Hook and the
// initial value is zero and here we have added Setter function set count that
// will increase the value by one and this decrease button will decrease the value
// by one let me show you the web page also you can see here we have this
// counter if I click on this increase button the counter value is
// increasing and if I click on decrease button it is decreasing the counter
// value now we will create the same counter functionality using use reducer
// hook so first we have to import the useReducer from React


function App() {  

  const [count, setCount] = useState(0);

  return (    
<>
<h1>{count}</h1>
<button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
<button onClick={()=>setCount(prev=>prev-1)}>Decrease</button>
</>
  )
}

export default App
