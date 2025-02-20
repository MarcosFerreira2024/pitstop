"use client"
import React from 'react'
import Menu from './Menu'
import useMenu from '@/hooks/useMenu'
import { MenuIcon  } from 'lucide-react'

function MenuTrigger() {

  const { isOpen,setIsOpen,  handleOpen } = useMenu()


  return (
    <>
    <Menu isOpen={isOpen} setIsOpen={setIsOpen}/> 
    <MenuIcon className='cursor-pointer text-principal' onClick={(e) => {e.stopPropagation() 
      handleOpen()} } />

    </>

  )
}

export default MenuTrigger
