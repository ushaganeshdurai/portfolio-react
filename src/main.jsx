import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Pdf from './components/Pdf.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/pdf' element={<Pdf />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
  </BrowserRouter>
)
