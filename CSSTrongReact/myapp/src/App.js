import { useState } from 'react'
import './App.css'
import User from './User'
// import Cart from './Cart'
// import ProductList from './ProductList'
// import UserClassComponent from './User.class'

function App() {
  // const [name, setName] = useState('Casio')
  // const [visible, setVisible] = useState(true)
  const [isShow, setIsShow] = useState(true)
  return (
    <div className='App'>
      {isShow && <User />}
      <button onClick={() => setIsShow((prevState) => !prevState)}>Change isShow</button>
    </div>
  )
}

export default App
