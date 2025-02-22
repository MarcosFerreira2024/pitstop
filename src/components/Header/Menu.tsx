"use client"
import React from 'react'
import ButtonList from '../shared/ui/ButtonList'
import { NavButtons } from '@/data/botoes'

import Logo from '../svgs/Logo'
import Button from '../shared/ui/Button'
import { deleteToken } from '@/services/auth'

function Menu({isOpen,setIsOpen}:{isOpen:boolean,setIsOpen:React.Dispatch<React.SetStateAction<boolean>>}) {


    const handleSair = async () => {
        await deleteToken()
    }


  return (
    <>
      <div  style={{transform: isOpen ? 'translateX(0)' : 'translateX(100%) '}} className={`w-[300px] ${isOpen?'opacity-100':'opacity-0'} items-center rounded-sm shadow-ui justify-between fixed  z-20  px-5 pb-5  flex flex-col gap-5 duration-300 ease-in-out  right-0 top-0   h-screen border-stroke  border-1  bg-background`}>
        
            <div className='flex flex-col gap-5 w-full  items-center '>
                <Logo escala={1.5}  className={`my-5`} onClick={() => setIsOpen(false)} />
                <ButtonList botoes={NavButtons} />
            </div>
            <Button type='button' onClick={handleSair}>Sair</Button>
      </div>
      <div onClick={() => setIsOpen(false)} className={`min-w-screen min-h-screen fixed left-0 bottom-0   ${isOpen?' z-10':'hidden '}`}>

      </div>

    </>

  )
}

export default Menu
