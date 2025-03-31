import React from 'react'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage';

function App() {  

const [name, setName] = useLocalStorage('username', '')
const [id, setId] = useLocalStorage('userid', '')

  return (    
<>
<input type="text" placeholder="enter your name"
value={name} onChange={(e) => setName(e.target.value)} />
<h2>Hello, {name}</h2>
<input type="text" placeholder="enter Id"
value={id} onChange={(e) => setId(e.target.value)} />
<h2>Your id: {id}</h2>
</>
  );
}

export default App
