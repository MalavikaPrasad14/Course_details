import { useState } from 'react'

import './App.css'
import Add from './components/Add'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar /><br /><br />
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  )
}

export default App
