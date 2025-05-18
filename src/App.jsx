import { useState } from 'react'
// import './App.css'
import Main from './components/Main'
import Header from './components/Header'

function App() {

  return (
      <div className='max-w-full h-screen dark:bg-gray-900 px-6 py-8 ring shadow-xl ring-gray-900/5'>
        <Header />
        <Main />
      </div>
  )
}

export default App
