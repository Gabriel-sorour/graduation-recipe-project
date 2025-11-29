import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  return (
    <header className='app-header container'>
      <ul className='nav-links'>
        <Link to="/Home"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
      </ul>
    </header>
  )
}

export default Header