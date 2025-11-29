import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Landing from './pages/Landing.jsx'
import './App.css'


function App() {

  return (
    <div className='app-layout'>
      <Header />
      <Routes>
        <Route index element={<Landing />} />
        <Route path='Home' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
