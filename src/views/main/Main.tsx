import Header from '@/components/Header/Header'
import CarList from '@/components/Main/Cars/CarList'
import { carData } from '@/data/testeCars'
import React from 'react'

function Main() {
  return (
    <div className='max-w-[1440px] mx-auto px-5   '>
      <Header/>
      <div className='flex   flex-wrap max-w-[1440px]    mb-5 justify-between gap-5 '>
      <CarList carro={carData}/>
      </div>
    </div>
  )
}

export default Main
