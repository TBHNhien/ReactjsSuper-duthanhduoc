import './App.css'
import Clock from './Clock'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('Casio')
  return (
    <div className='App'>
      <button onClick={() => setName('Apple')}>Change name</button>
      <Clock name={name}></Clock>
    </div>
  )
}

export default App
