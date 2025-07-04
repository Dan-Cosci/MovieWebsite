import React from 'react'
import './css/App.css'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favourites" element={<Favourites />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
