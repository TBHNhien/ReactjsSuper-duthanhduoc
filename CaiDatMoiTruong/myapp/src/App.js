import './App.css'
import Clock from './Clock'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('Casio')
  const [visible, setVisible] = useState(true)
  return (
    <div className='App'>
      <button onClick={() => setName('Apple')}>Change name</button>
      <button onClick={() => setVisible(false)}>Hide Clock component</button>

      {visible && <Clock name={name}></Clock>}
    </div>
  )
}

export default App
