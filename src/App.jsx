import './App.css'
import Packege from './template/Packege';
import Gallery from './template/Gallery';
import Home from './template/Home';
import History from './template/History';
import Contact from './template/Contact';
import Navbar from './template/home/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Packages' element={<Packege />} />
          <Route path='/History' element={<History />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App