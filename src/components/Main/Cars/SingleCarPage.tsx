"use client"
import useCar from '@/hooks/useCar'
import React from 'react'
import CarGallery from './CarGallery'
import CarDetails from './CarDetails'
import { useParams } from 'next/navigation'

function SingleCarPage() {
  
  const params = useParams()

  const id = params && params.slug?params.slug[1]:null

  const {carInfo, loading, error } = useCar(id)




  return (
    <>
      {loading ? <p className=' text-subtitle text-green-500 font-poppins'>Carregando ...</p>: <div className=''>
        {error? <p className='text-red-500 text-subtitle font-poppins'>{error}</p>:null}

        {carInfo?
        <div className='grid md:grid-cols-2 lg:gap-[80px] gap-5 justify-between'>
        <CarGallery photos = {carInfo.photos}/>

        <CarDetails info = {carInfo} />
        
        
        </div>:null
        
        
        }

        
        
        
        </div>}
      
    </>
  )
}

export default SingleCarPage
