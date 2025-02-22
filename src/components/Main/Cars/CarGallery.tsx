import Image from 'next/image'
import React from 'react'
import FullScreenPhoto from './FullScreenPhoto'

function CarGallery({photos}:{photos:string[]}) {

    const [selectedPhoto, setSelectedPhoto] = React.useState(photos[0])

    const [clicked, setClicked] = React.useState(false)

  return (
    <section>
        <div >
          <Image onClick={() => setClicked(true)} src={selectedPhoto} alt="Foto do carro" width={1920} height={1080} className='object-cover hover:scale-105  duration-300 ease-in-out cursor-pointer border-1 border-stroke rounded-sm shadow-ui max-h-[400px] min-h-[400px]'/>

        </div>
        <div className='flex flex-row gap-5 mt-5'>
          {photos.map((photo,i)=> (
            <div key={photo+i}>
              <Image onClick={() => setSelectedPhoto(photo)} key={photo} src={photo} alt="" className={`object-cover border-1 border-stroke rounded-sm duration-300 ease-in-out shadow-ui ${selectedPhoto === photo?"":"cursor-pointer hover:scale-105"} max-h-[40px] min-h-[40px]`} width={1920} height={1080} />

            </div>
          ))}


        {clicked?<FullScreenPhoto CloseModal={() => setClicked(false)} photo={selectedPhoto}  />:null}

        </div>
      
    </section>
  )
}

export default CarGallery
