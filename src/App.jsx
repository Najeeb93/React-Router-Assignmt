import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from './components/Card'
import Navbar from './components/Navbar'
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path ='/' element = {<Card/>}>
        <Route path='/Navbar' element = {<Navbar/>}></Route>

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
