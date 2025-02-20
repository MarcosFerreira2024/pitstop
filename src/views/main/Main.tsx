import Header from '@/components/Header/Header'
import CarList from '@/components/Main/CarList'
import { carData } from '@/data/testeCars'
import React from 'react'

function Main() {
  return (
    <div className='max-w-[1440px] mx-auto   '>
      <Header/>
      <div className='flex  px-5 flex-wrap max-w-[1440px]  mt-[60px]  mb-5 justify-between gap-5 '>
      <CarList carro={carData}/>
      </div>
    </div>
  )
}

export default Main
