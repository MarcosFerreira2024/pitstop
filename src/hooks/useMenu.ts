"use client"
import React from 'react'

function useMenu() {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {

        setIsOpen(!isOpen);
        
    }


  return {
    isOpen,
    setIsOpen,
    handleOpen,
  }

  
}

export default useMenu
