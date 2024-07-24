import { useState } from 'react'
import Header from './component/header/header'
import MediaCard from './component/cards/cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Header></Header>
      <h1>Recipes</h1>
      <MediaCard></MediaCard>
    </>
  )
}

export default App
