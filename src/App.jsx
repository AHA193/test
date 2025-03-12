import React, { useState } from 'react'
import './App.css'
import { useReducer } from 'react';

// Now we will create the same counter functionality using use reducer
// hook so first we have to import the useReducer from React

// this use reducer accept two arguments the first one is reducer 
// function and the second one is default state
// useReducer(reducer, state)
// useReducer(reducer, {count: 0})


function App() {  

  const initialState = {count: 0}

  const reducer  = (state, action) =>{
    switch(action.type) {
      case `increase` : {
        return {count: state.count + 1}
      }
      case `decrease` : {
        return {count: state.count - 1}
      }
      case `input` : {
        return {count: action.payload}
      }
      default : {
        return state
      }
    }

  }
  const [state, dispatch] = useReducer(reducer, initialState)


  return (    
<>
<h1>{state.count}</h1>
<button onClick={()=>dispatch({type: `increase`})}>Increase</button>
<button onClick={()=>dispatch({type: `decrease`})}>Decrease</button>
<br/>
<input value={state.count}
onChange={(e)=>dispatch({type: `input`,payload:Number(e.target.
value)})}
type="number" />
</>
  )
}

export default App
