import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Landing from './pages/Landing.jsx'
import './App.css'


function App() {

  return (
    <Router>
      <div className='app-layout'>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
