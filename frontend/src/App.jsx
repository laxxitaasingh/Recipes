import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './component/header/header';
import ItemDetail from './component/itemDetail/item';
import MediaCard from './component/cards/cards';
import Signup from './component/signup/signup';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <ConditionalHeader />
      <Routes>
        <Route path="/" element={<MediaCard />} />
        <Route path="/info/:name" element={<ItemDetail />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

// Component to conditionally render the Header
function ConditionalHeader() {
  const location = useLocation(); // Get the current location

  // Check if the current path is '/signup'. If true, do not render the header.
  const hideHeader = location.pathname === '/signup';

  // Only render the Header if `hideHeader` is false
  return !hideHeader && <Header />;
}

export default App;
