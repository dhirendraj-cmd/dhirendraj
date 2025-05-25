import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router'
import Main from './components/Main'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Connect from './components/Connect'
import Work from './components/Work'
import BookCall from './components/BookCall'

function App() {

  return (
      <div className='max-w-full h-screen dark:bg-gray-800 px-6 py-8 ring shadow-xl ring-gray-900/5'>
        <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/connect' element={<Connect />} />
              <Route path='/work' element={<Work />} />
              <Route path='/book' element={<BookCall />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
