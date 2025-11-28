import './App.css'

function Header() {
  return (
    <header className='app-header container'>
      <h1>Welcome to the App</h1>
    </header>
  )
}

function MainContent() {
  return (
    <main className='app-main container'>
      <p>This is the main content area.</p>
    </main>
  )
}

function Footer() {
  return (
    <footer className='app-footer container'>
      <p>© 2024 My App</p>
    </footer>
  )
}

function App() {

  return (
    <div className=''>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
