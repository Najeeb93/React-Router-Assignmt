import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from './components/Card'
import { NewsLetter } from './components/NewsLetter'
import NotFound from './components/NotFound'
import Header from './components/Header'
import { Products } from './components/Products'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element = {<Products/>}/>
     <Route path='/card' element = {<Card/>}/>
     <Route path='/abc' element = {<NewsLetter/>}/>
     <Route path='*' element = {<NotFound/> }/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
