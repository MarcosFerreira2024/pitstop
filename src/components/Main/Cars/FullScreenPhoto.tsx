"use client"
import useZoom from '@/hooks/useZoom'
import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FullScreenPhoto({photo, CloseModal}:{photo:string, CloseModal:()=>void}) {

  
    const { handleZoom, zoom} = useZoom()

  return (
    <div onClick={CloseModal}  className='  flex items-center justify-center   right-0 bottom-0  md:px-5 md:py-5   absolute top-0 left-0'>
            <div className='relative'>
                <Image src={photo} style={{transform: `scale(${zoom})`}}  onClick={(e) => {
                    e.stopPropagation()
                    handleZoom()
                }} alt="Foto do carro" width={1920} height={1080} className={` transition-all ease-in-out duration-300  ${zoom === 3?"cursor-zoom-out":"cursor-zoom-in"}   z-20 object-cover  rounded-sm   border-1 border-stroke  min-w-[calc(100vw-20px)] min-h-[calc(80vh-20px)] max-w-full max-h-[calc(80vh-20px)] md:min-w-[calc(100vw-20px)] md:min-h-[calc(100vh-20px)] md:max-w-full md:max-h-[calc(100vh-20px)] `} />
                <X onClick={CloseModal} width={24} height={24} className='absolute   border-1 bg-white text-orange-600 border-stroke rounded-full top-5 right-5 cursor-pointer hover:scale-105 duration-300 ease-in-out'/>
            </div>
    </div>
  )
}

export default FullScreenPhoto
