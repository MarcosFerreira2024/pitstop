import Header from '@/components/Header/Header'
import SingleCarPage from '@/components/Main/Cars/SingleCarPage'
import React from 'react'

function CarPage() {
  return (
    <div className='max-w-[1440px] px-5 mx-auto '>
        <Header/>
        <SingleCarPage  />  
    </div>
  )
}

export default CarPage
