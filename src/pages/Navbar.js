import { Button } from '@material-tailwind/react'
import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineMenu, AiOutlineMenuFold } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { BsSearch } from 'react-icons/bs'
import useOnClickOutside from '../hocks/useOnClickOutside'

const Navbar = ({ setShow, handleOpen }) => {
  const [openSearch, setOpenSearch] = useState(false)
  const ref = useRef()

  /* custom hocks */
  useOnClickOutside(ref, () => setOpenSearch(false))

  return (
    <nav className='h-[70px] lg:h-[56px] border-b-2 bg-[#F5F5F5] border-[#E6E6E6] w-full sticky top-0 left-0 z-40'>
      <section className='w-full bg-green h-full justify-between grid grid-cols-3'>
        <div className='flex items-center justify-start col-span-1 md:col-span-2'>
          <h5
            onClick={() => setShow((state) => !state)}
            className='text-[1.5rem] pl-8 cursor-pointer lg:hidden block'
          >
            <AiOutlineMenu />
          </h5>
          <div className='w-full lg:block hidden border-r-2 border-[#E6E6E6] mx-2 h-full'>
            <input
              class='bg-transparent h-full w-full pr-5 rounded-lg pl-8 text-sm focus:outline-none relative'
              type='search'
              name='search'
              placeholder='Search'
            />
            <span>
              <CiSearch className='absolute top-1/2 bottom-1/2 my-auto left-2 text-gray text-2xl' />
            </span>
          </div>
          {/* mobile search bar  */}
          <span onClick={() => setOpenSearch(true)} className='lg:hidden ml-2'>
            <BsSearch className='text-xl text-softBlack cursor-pointer' />{' '}
          </span>
          {/* mobile search field */}
          {openSearch && (
            <div
              ref={ref}
              className='absolute h-[70px] w-full bg-white flex justify-center items-center transition-all duration-1000 z-50'
            >
              <div className='w-full mx-2 h-full'>
                <input
                  class='bg-transparent h-full w-full pr-5 rounded-lg pl-8 text-sm focus:outline-none relative'
                  type='search'
                  name='search'
                  placeholder='Search'
                />
                <span>
                  <CiSearch className='absolute top-1/2 bottom-1/2 my-auto left-2 text-gray text-2xl' />
                </span>
              </div>
            </div>
          )}
        </div>
        {/* sell a car  */}
        <div className='flex items-center justify-end mr-3 col-span-2 md:col-span-1'>
          <Button
            onClick={handleOpen}
            className='rounded-none shadow-none hover:shadow-none w-[185px] bg-secondary text-primary capitalize lg:px-16 mx-3 py-3'
          >
            Sell a Car
          </Button>
          <span className='p-2 bg-white'>
            <AiOutlineMenuFold className='text-2xl cursor-pointer' />
          </span>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
