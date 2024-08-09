import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* {Add} */}
      {/* {View} */}
      <Navbar />
      
      <Routes>
        <Route path="/l" element={<Add />} />
        <Route path="/v" element={<View />} />
        </Routes>
      
      
    </>
  )
}

export default App
