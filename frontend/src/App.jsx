import { useState } from 'react'
import Header from './component/header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Header></Header>
      <h1>Recipes</h1>
    </>
  )
}

export default App
