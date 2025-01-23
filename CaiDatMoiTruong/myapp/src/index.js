import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Welcome from './Welcome'

const root = ReactDOM.createRoot(document.getElementById('root'))

/* <React.StrictMode>
<App />
</React.StrictMode> */

// const element = <Welcome name='Nhien' />
const element = (
  <div>
    <Welcome name='Nhien' age={26} />
    <Welcome name='Nam' age={27} />
    <Welcome name='Hoa' age={28} />
  </div>
)
root.render(element)

reportWebVitals()
