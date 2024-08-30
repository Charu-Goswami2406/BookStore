import React from 'react'
import Navbar from '../components/Navbar'
import Explore from '../components/Explore'
import Footer from '../components/Footer'

function Explores() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        <Explore/>
      </div>
      <Footer/>
    </>
  )
}

export default Explores
