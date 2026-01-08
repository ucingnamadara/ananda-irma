
import { useEffect, useLayoutEffect } from 'react';
import './App.css'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <div className='max-w-125 w-full h-screen mx-auto text-center'>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
