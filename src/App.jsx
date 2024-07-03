import './App.css'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Vans from './pages/Vans.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to='/' className='home'>#VANLIFE</Link>
      <Link to='/about' className='about'>About</Link>
      <Link to='/vans' className='vans'>Vans</Link>
    </nav>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/vans' element={<Vans/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
