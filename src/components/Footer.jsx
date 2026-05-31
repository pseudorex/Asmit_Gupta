import React from 'react'
import Logo from './Logo'

export default function Footer() {
  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
      <Logo className='h-6 w-6 lg:h-9 lg:w-9 text-white' />


      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p>@ 2026 Personal Portfolio</p>
        <p>Made by Asmit Gupta</p>
      </div>
    </div>
  )
}
