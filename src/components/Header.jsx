import '../styles/Header.css'

function Header() {
  return (
    <header className='app-header container'>
      <ul className='nav-links'>
        <li><a href="#/Home">Home</a></li>
        <li><a href="#/about">About</a></li>
      </ul>
    </header>
  )
}

export default Header