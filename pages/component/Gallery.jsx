import React from 'react'
import Image from 'next/image'
import Image1 from '../../assets/images/gallery1.jpeg'
import Image2 from '../../assets/images/gallery2.jpeg'
import Image3 from '../../assets/images/gallery3.jpeg'
import Image4 from '../../assets/images/gallery4.jpeg'
import Image5 from '../../assets/images/gallery5.jpeg'
import Image6 from '../../assets/images/gallery6.jpeg'
import SubHeading from './SubHeading'

const Gallery = () => {
  return (

    <section className='bg-team'>
      <div class="container-fluid  mx-auto">
        <div className="  sm:px-8 lg:pt-8  lg:px-20">
            <h2 className='mt-24 max-w-2xl mb-4 text-5xl tracking-tight leading-none md:text-5xl xl:text-4xl sm:items-center team-heading'>
              Gallery
            </h2>
        </div>

        <div class="grid-cols-3 px-20 mb-4 space-y-2  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
          <div class="w-full rounded">
            <Image src={Image1} />
          </div>
          <div class="w-full col-span-2 row-span-2 rounded">
            <Image src={Image2} />
          </div>
          <div class="w-full rounded">
            <Image src={Image3} />
          </div>
          <div class="w-full rounded">
            <Image src={Image4} />
          </div>
          <div class="w-full rounded">
            <Image src={Image5} />
          </div>
          <div class="w-full rounded">
            <Image src={Image6} />
          </div>
        </div>
      </div>

    </section >
  )
}

export default Gallery