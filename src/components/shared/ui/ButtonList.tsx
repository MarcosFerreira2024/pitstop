import React from 'react'
import Button from './Button'


export type ButtonListProps = {
    label:string,
    type:"submit" | "reset" | "button"
    onClick?: () => void


}


function ButtonList({botoes}:{botoes:ButtonListProps[]}) {
  return (
    <>
      {botoes.map((data,i)=> (
        <Button key={i} type={data.type} onClick={data.onClick}  >{data.label}</Button>
      ))}
    </>
  )
}

export default ButtonList
