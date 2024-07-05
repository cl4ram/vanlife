import './App.css'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Vans from './pages/Vans/Vans.jsx'
import VanDetail from './pages/Vans/VanDetail.jsx'
import Layout from './components/Layout.jsx'
import Income from './pages/Host/Income.jsx'
import Reviews from './pages/Host/Reviews.jsx'
import Dashboard from './pages/Host/Dashboard.jsx'
import VansHost from './pages/Host/VansHost.jsx'
import VansHostDetail from './pages/Host/VansHostDetail.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HostLayout from './components/HostLayout.jsx'
import HostVanInfo from './pages/Host/HostVanInfo.jsx'
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx'
import HostVanPricing from './pages/Host/HostVanPricing.jsx'
import './server'


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='host' element={<HostLayout/>} >
          <Route index element={<Dashboard/>}/>
          <Route path='income' element={<Income/>}/>
          <Route path='reviews' element={<Reviews/>}/>
          <Route path='vans' element={<VansHost/>}/>
          <Route path='vans/:id' element={<VansHostDetail/>}>        
            <Route index element={<HostVanInfo/>}/>
            <Route path='photos' element={<HostVanPhotos/>}/>
            <Route path='pricing' element={<HostVanPricing/>}/>
          </Route>
        </Route>
        <Route path='about' element={<About/>}/>
        <Route path='vans' element={<Vans/>}/>
        <Route path='vans/:id' element={<VanDetail/>}/>
        

      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
