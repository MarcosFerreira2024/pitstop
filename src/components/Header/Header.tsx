import Logo from '@/components/svgs/Logo'
import React from 'react'
import MenuTrigger from './MenuTrigger'



function Header() {

  
  return (
    <header className='flex justify-between relative items-center mb-[60px]   py-5 '>
      <Logo escala={2} />



      <MenuTrigger />





    </header>
  )
}

export default Header
