import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import Navbar from './Navbar'
import Products from './Products'

const Home = ({ show, setShow }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <div className=''>
      <Navbar show={show} setShow={setShow} handleOpen={handleOpen} />
      <Products />
      <Modal open={open} handleOpen={handleOpen} />
    </div>
  )
}

export default Home
