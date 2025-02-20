"use client"
import Form from '@/components/login/Form'
import { dataSignIn } from '@/data/input'
import Link from 'next/link'
import React from 'react'

function SingIn() {
  return (
    <div>
      <Form data={dataSignIn} to="Cadastrar" />
      <div className='flex justify-between text-principal font-poppins text-subtitle-sm pt-2.5 px-5'>
        <p className=' max-w-[30ch] '>Já possui conta? <Link href={'/auth/login'} className='underline font-bold'>Logar</Link></p>
      </div>
    </div>
  )
}

export default SingIn
