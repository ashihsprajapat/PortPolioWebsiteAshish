import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import AboutPage from './about/aboutPage.jsx'
import ProjectPage from './project/projext.jsx'
import HomePage from './home/HomePage.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/project' element={<ProjectPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  </StrictMode>,
)
