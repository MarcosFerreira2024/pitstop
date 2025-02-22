"use client"
import Button from '@/components/shared/ui/Button'
import { Car } from '@/services/car'
import { Check, X } from 'lucide-react'
import React from 'react'

function CarDetails({info}:{info:Car}) {

  const [hovering, setHovering] = React.useState(false)

  return (
    <aside className='flex flex-col gap-5 font-poppins md:max-w-[300px] justify-center items-center md:justify-normal md:items-start'>
      <div className='flex flex-col gap-1 md:gap-2 items-center text-center md:items-start md:text-start'>
        <h1 className='text-importante text-title-lg font-roboto'>{info.title}</h1>
        <p className='text-principal line-clamp-3  '>{info.description}</p>
      </div>

       <div onMouseLeave={() => setHovering(false)} onMouseEnter={() => setHovering(true)} className={` ${info.negotiable?"text-green-500 hover:bg-green-500 ":"text-red-500 hover:bg-red-500"} md:self-start self-center group transition-all ease-in-out duration-300 border-1 items-center  shadow-ui h-[50px] rounded-sm px-5 flex gap-1 md:gap-2 flex-row text-subtitle`}>
        {info.negotiable? <Check width={24} height={24} className='text-green-500 group-hover:text-background'/> : <X width={24} height={24} className='text-red-500 group-hover:text-background' />}
        <h1 className={`text-subtitle ${info.negotiable?"text-green-500  group-hover:text-background ":"text-red-500  group-hover:text-background"}`}>{info.negotiable?"Negociável":"Nao Negociável"}</h1>
       </div>
       <div className='flex flex-col gap-1 md:gap-2'>
        <p className='text-apagado '>de <span className='line-through'>{info.oldPrice}</span></p>
        <h1 className='text-apagado'>por <span className='text-principal text-title '>{info.newPrice}</span></h1>
       </div>

       <Button  type='button' classes={` ${hovering?"animate-pulse scale-105 ":""}`} onClick={() => console.log("Clicou no botão")}>Entrar em Contato</Button>
       <div className='flex flex-col gap-1 md:gap-2'>
        <p className='text-apagado'>Vendido por : <span className='text-principal'>{info.seller.name}</span></p>
        <p className='text-apagado'>Contato : <span className='text-principal'>{info.seller.email}  </span></p>   
      </div>     
    </aside>
  )
}

export default CarDetails
