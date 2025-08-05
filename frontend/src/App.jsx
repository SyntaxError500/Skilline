import React from 'react'
import NavBar from './components/NavBar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>

      <main className='flex-grow'>
       <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
         </main>
        <Footer/>
    </div>
  )
}

export default App