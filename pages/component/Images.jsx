import Image from 'next/image'
import React from 'react'
import Image1 from '../../assets/images/client.png'
import ImageContainer from './ImageContainer'

const Images = () => {
  return (
    <div className='container-fluid images-color lg:px-24'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10  mb-10 mx-auto">
        <div className="">
          <ImageContainer
            classes={"w-24 h-24 mt-10 mb-10 object-cover"}
            src={Image1}
            alt={"Super"}
          />
        </div>
        <div className="">
          <ImageContainer
            classes={"mt-10 mb-10 w-24 h-24 object-cover"}
            src={Image1}
            alt={"Flowlyf"}
          />
        </div>
        <div className="">
          <ImageContainer
            classes={"mt-10 mb-10 w-24 h-24 object-cover"}
            src={Image1}
            alt={"Vinayak steel and furniture"}
          />
        </div>
        <div className="">
          <ImageContainer
            classes={"mt-10 mb-10 w-24 h-24 object-cover"}
            src={Image1}
            alt={"Lakshya academy"}
          />
        </div>
        <div className="">
          <ImageContainer
            classes={"mt-10 mb-10 w-24 h-24 object-cover"}
            src={Image1}
            alt={"Gurukul pharmacy"}
          />
        </div>
        <div className="">
          <ImageContainer
            classes={"mt-10 mb-10 w-24 h-24 object-cover rounded-lg "}
            src={Image1}
            alt={"MahaLaxmi"}
          />
        </div>
      </div>
    </div >
  )
}

export default Images