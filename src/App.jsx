import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from './components/Card'
import { NewsLetter } from './components/NewsLetter'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
     <Route path='/' element = {<Card/>}/>
     <Route path='/abc' element = {<NewsLetter/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
