import { useState } from 'react'
import Header from './component/header/header'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ItemDetail from './component/itemDetail/item'
import MediaCard from './component/cards/cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
     <Router>
      <Header />
      <h1>Recipes</h1>
      <Routes>
        <Route path="/" element={<MediaCard />} />
        <Route path="/info/:name" element={<ItemDetail />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
