import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navget from './components/navget'
import Tableget from './components/tableget'
import { Route, Routes } from 'react-router-dom'
import Homepg from './components/Homepg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navget/>
     <Routes>
      <Route path='/pro' element={<Tableget/>}/>
      </Routes>
      <Routes>
      <Route path='/home' element={<Homepg/>}/>
      </Routes>
   
    </>
  )
}

export default App
