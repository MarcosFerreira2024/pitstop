"use client"

import Image from 'next/image'
import React from 'react'
import Button from '../../shared/ui/Button'
import Link from 'next/link'

export type CarsProps = {
    src:string,
    alt:string,
    title:string
    oldPrice:string,
    newPrice:string
    id:string,
}

function Cars({src,alt,title,oldPrice,newPrice,id}:CarsProps) {
  return (
    <div className='flex flex-col mb-10 gap-2.5  border-b-1 pb-2.5 border-b-stroke  flex-1 w-full min-w-[280px] md:min-w-[335px]'>
        <Link href={`main/car/${id}`}><Image src={src} alt={alt} width={1920} height={1080} className='object-cover hover:scale-105 duration-300 ease-in-out  min-w-[280px] md:min-w-[335px]  w-full max-h-[340px] min-h-[340px] rounded-sm shadow-ui border-1 border-stroke' /></Link>
        <h1 className='text-importante text-title font-roboto'>{title}</h1>
        <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col gap-1.5'>
                <p className='text-apagado text-subtitle-sm font-poppins'>de <span className='line-through'>{oldPrice}</span></p>
                <h2 className='text-principal text-subtitle-sm font-poppins'>por <span className='text-subtitle'>{newPrice}</span></h2>
            </div>
            <div>
                <Button classes='px-10 text-subtitle-sm max-h-[30px] ' type='button'  onClick={() => console.log("Clicou no botão")} >Comprar</Button>
            </div>

        </div>

        
      
    </div>
  )
}

export default Cars
