import { useState } from 'react'
import './App.css'
import Cart from './Header/Cart'
import Navigation from './Header/Navigation'
// import User from './User'
// import RuleOfHook from './ruleOfHook'
// import AutoBatching from './AutoBatching'
// import Cart from './Cart'
// import ProductList from './ProductList'
// import UserClassComponent from './User.class'

function App() {
  // const [name, setName] = useState('Casio')
  // const [visible, setVisible] = useState(true)
  // const [isShow, setIsShow] = useState(true)
  return (
    <div className='App'>
      {/* {isShow && <User />}
      <button onClick={() => setIsShow((prevState) => !prevState)}>Change isShow</button> */}
      {/* <RuleOfHook /> */}
      {/* <AutoBatching /> */}
      <Cart />
      <Navigation />
    </div>
  )
}

export default App
