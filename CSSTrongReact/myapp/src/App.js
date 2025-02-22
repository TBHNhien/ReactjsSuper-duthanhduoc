import './App.css'
import User from './User'
// import Cart from './Cart'
// import ProductList from './ProductList'
import UserClassComponent from './User.class'

function App() {
  // const [name, setName] = useState('Casio')
  // const [visible, setVisible] = useState(true)

  return (
    <div className='App'>
      <UserClassComponent />
      <User />
    </div>
  )
}

export default App
