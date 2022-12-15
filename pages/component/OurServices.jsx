import React from 'react'
import Button from './button'
import Heading from './Heading'
import SubHeading from './SubHeading'
import Image1 from '../../assets/images/sofa (2).png';

import ImageContainer from './ImageContainer';
import Image from 'next/image';
import Image4 from '../../assets/images/cleaning (2).png';
import Image3 from '../../assets/images/machine-cleaning.png';
import Image2 from '../../assets/images/vacuum-cleaner.png';
// 
const OurServices = () => {

  const service = [
    {
      "id": 1,
      "name": "Housewares Services",
      "description": "You fill out an application on the site or contact us in a way convenient for you (phone, e- mail, instant messenger)",
      "image": Image1
    },
    {
      "id": 2,
      "name": "Office space cleaning",
      "description": "You fill out an application on the site or contact us in a way convenient for you (phone, e- mail, instant messenger)",
      "image": Image2
    },
    {
      "id": 3,
      "name": "Maintenance Service",
      "description": "You fill out an application on the site or contact us in a way convenient for you (phone, e- mail, instant messenger)",
      "image": Image3
    },
    {
      "id": 4,
      "name": "Commercial cleaning",
      "description": "You fill out an application on the site or contact us in a way convenient for you (phone, e- mail, instant messenger)",
      "image": Image4
    }
  ]

  return (
    <section className='section'>
      <div className='container-fluid'>
        <div className=" py-18 sm:px-8 lg:py-8 lg:px-24">

          <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>

            <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
              <div className="">
                <Heading title="Our Services" />
                <SubHeading subHeading="Perfect cleaness " />
                <SubHeading subHeading="without efforts!" />
              </div>
            </div>
            <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
              <div className="flex justify-end">
                <Button button="home" />
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
            {
              service.map((value) => (
                <div class=" p-8 rounded-lg hover:bg-white">
                  <div className='relative mx-auto w-full'>
                    <Image alt='service-image' src={value.image} className="w-12 h-12" />
                    <h5 class="mb-2 text-2xl mt-4  font-semibold tracking-tight text-primary-color">{value.name}</h5>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg> */}
        </div>
      </div >
    </section >
  )
}

export default OurServices
