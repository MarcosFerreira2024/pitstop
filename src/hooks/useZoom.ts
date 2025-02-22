"use client"

import React, { useRef } from 'react'

function useZoom () {

const inputRef = useRef<NodeJS.Timeout | null>(null)

const [zoom, setZoom] = React.useState(1)

const handleZoom = () => {
    if (inputRef.current){
        clearTimeout(inputRef.current)
    }
    if (zoom === 3 ) {


        setZoom(1)
        return

    }
    setZoom(zoom + 1)

}

return {
    zoom,
    setZoom,
    handleZoom
}
}

export default useZoom