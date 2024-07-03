import React from 'react'
import Navbar from '../Components/Navbar'
import Item from '../Components/Item'
import Footer from '../Components/Footer'


function Items() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Item/>
    </div>
    <Footer/>
    </>
  )
}

export default Items
