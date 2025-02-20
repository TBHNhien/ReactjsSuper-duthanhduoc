import './App.css'
import Cart from './Cart'
import ProductList from './ProductList'

function App() {
  // const [name, setName] = useState('Casio')
  // const [visible, setVisible] = useState(true)

  return (
    <div className='App'>
      <ProductList />
      <Cart />
    </div>
  )
}

export default App
