"use client"
import React from 'react'
import InputList from '../shared/Inputs/InputList'
import useForm from '@/hooks/useForm'
import { InputData } from '../shared/Inputs/Input'
import Button from '../shared/ui/Button'



function Form({data,to}:{data:InputData[],to:string}) {

  const {formData,handleChange , handleSubmit,isSubmitting,errors} = useForm()

  return (

    
    <form className='pt-40' onSubmit={(e)=> handleSubmit(e , to.toLowerCase())}>
      {errors?.message && <p className='text-center text-red-500'>{errors?.message}</p>}
      <h1 className='mb-8 text-center text-importante text-title-lg font-roboto'>{to}</h1>
      <InputList formData={formData} handleChange={handleChange} data={data} />
      <div className='px-5'>
        <Button isSubmiting={isSubmitting} type="submit">Entrar</Button>
      </div>
    </form>
  )
}

export default Form
