import React from 'react'
import Cars, { CarsProps } from './Cars'

function CarList({carro}:{carro:CarsProps[]}) {
  return (
    <>
    {carro.map((data,index)=> (
        <Cars id={data.id}  alt={data.alt} newPrice={data.newPrice} oldPrice={data.oldPrice} src={data.src} title={data.title} key={index}  />
    ))}
      
    </>
  )
}

export default CarList
