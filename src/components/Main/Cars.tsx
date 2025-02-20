import Image from 'next/image'
import React from 'react'
import Button from '../shared/ui/Button'
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
    <div className='flex flex-col gap-2.5 border-b-sm border-b-stroke max-w-[335px] flex-1'>
        <Link href={`/car/${id}`}><Image src={src} alt={alt} width={1920} height={1080} className='object-cover rounded-sm shadow-ui border-sm border-stroke' /></Link>
        <h1 className='text-importante text-title font-roboto'>{title}</h1>
        <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col gap-1.5'>
                <p className='text-apagado text-subtitle-sm font-poppins'>de {oldPrice}</p>
                <h2 className='text-principal text-subtitle-sm font-poppins'>por <span className='text-subtitle'>{newPrice}</span></h2>
            </div>
            <div>
                <Button type='button' onClick={() => console.log("Clicou no botão")} >Comprar</Button>
            </div>

        </div>
      
    </div>
  )
}

export default Cars
