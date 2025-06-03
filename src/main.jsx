import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import './App.css'
import "./index.css"
import Pdf from './components/Pdf.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/pdf' element={<Pdf />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
  </BrowserRouter>
)
