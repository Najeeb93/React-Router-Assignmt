import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from './components/Card'
import { NewsLetter } from './components/NewsLetter'
import NotFound from './components/NotFound'
import { NavbarOne } from './components/NavbarOne'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element = {<NavbarOne/>}/>
     <Route path='/card' element = {<Card/>}/>
     <Route path='/abc' element = {<NewsLetter/>}/>
     <Route path='*' element = {<NotFound/> }/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
