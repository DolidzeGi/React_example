import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Data from './components/data/Data';
import Cloud from './components/cloud/Cloud';
import Footer from './components/footer/Footer';

function App() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <Data/>
    <Cloud/>
    <Footer/>
  </>
  )
}

export default App