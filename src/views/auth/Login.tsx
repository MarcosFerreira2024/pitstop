"use client"
import Form from '@/components/login/Form'
import { dataLogin } from '@/data/input'
import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div >
      <Form data={dataLogin} to="Login" />
      <div className='flex justify-between text-principal font-poppins text-subtitle-sm pt-2.5 px-5'>
        <p className=' max-w-[30ch] '>Esqueceu sua senha? <Link href={'/auth/recuperar'} className='underline font-bold'>Recuperar Senha</Link></p>
        <p className='text-right'>Ainda não possui uma conta? <Link href={'/auth/signin'} className='underline font-bold'>Cadastrar</Link></p>
      </div>
      
    </div>
  )
}

export default Login
