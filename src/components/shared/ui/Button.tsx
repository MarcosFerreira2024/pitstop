import React from 'react'

type ButtonProps = {
  children:React.ReactNode,
  type: "submit" | "reset" | "button",
  onClick?: () => void,
  isSubmiting?:boolean
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>,
}

function Button({children,type,onClick,isSubmiting,...props}:ButtonProps) {
  return (
    <button type={type}  onClick={onClick} disabled={isSubmiting} {...props} className={`h-[50px] font-poppins focus:outline-importante hover:bg-botao-secundary hover:text-importante hover:scale-105 focus:bg-botao-secundary focus:text-importante focus:scale-105  duration-300 transition-all ease-in-out disabled:cursor-not-allowed  cursor-pointer w-full shadow-ui rounded-sm text-subtitle text-branco-acinzentado  bg-botao-primary border-1 border-stroke`}>
      {children}
    </button>
  )
}

export default Button
