import './App.css'
import BareInput from './BareInput'
import Clock from './Clock'
import { useState } from 'react'
import Layout from './Layout'
import BareButton from './BareButton'

function App() {
  // const [name, setName] = useState('Casio')
  // const [visible, setVisible] = useState(true)

  return (
    <div className='App'>
      {/* <button onClick={() => setName('Apple')}>Change name</button>
      <button onClick={() => setVisible(false)}>Hide Clock component</button>
      {visible && <Clock name={name}></Clock>} */}
      <Layout>
        <h1>HELLO</h1>
        <BareInput type={'password'} value='nhien' autoFocus className='input-control' onChange={() => {}} />
        <BareButton />
      </Layout>
    </div>
  )
}

export default App
