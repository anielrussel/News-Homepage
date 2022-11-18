import React from 'react'
import './App.css'
import { Navbar, Homepage } from './components'

const App = () => {
  return (
    <div className='App'>
      <p style={{fontSize: 8, position: "absolute", marginTop: -20}}>Challenge By: Frontendmentor, Coded By: <a href='https://github.com/anielrussel'>Russel M. Aniel</a></p>
      <Navbar />
      <Homepage />
    </div>
  )
}

export default App

/* Coded By: Russel M. Aniel */