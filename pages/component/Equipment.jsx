import React from 'react'
import Heading from './Heading'
import SubHeading from './SubHeading'
import Image1 from '../../assets/images/toilet (2).png';
import ImageContainer from './ImageContainer';
import Image from 'next/image';
import Paragraph from './Paragraph';
import Line from '../../assets/images/icons8-vertical-line-32.png'
import Image7 from '../../assets/images/a211ce69-8ed9-4124-953b-a1f1681775a3-removebg-preview.png'

const Equipment = () => {
  return (
    <div>
       <div className='container-fluid'>
          <div className="mb-24 sm:px-8 lg:px-24">

            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>

              <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
                <div className="">
                  <Heading title="OUR EQUIPMENT" classes="text-white max-w-xl mb-4 text-xl tracking-tight leading-none md:text-xl xl:text-xl sm:items-center sm:text-sm" />
                  <SubHeading subHeading="Our professional equipment" classes="max-w-2xl mb-4 text-6xl tracking-tight leading-none md:text-5xl xl:text-6xl sm:items-center sm:text-sm 	text-white" />
                </div>
              </div>
            </div>
            <div class="mt-2 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
              <div className=''>
                <div class=" background-white p-4 pt-1 pb-5">
                  <div class="overflow-hidden light-green py-10 px-10 mx-auto ">
                    <Image src={Image7} className="h-32 w-32 mx-auto" />
                  </div>
                  <div>
                    <Heading title="Boash Vac 15" classes="text-white text-center mt-5" />
                    </div>
                </div>
              </div>
              <div className=''>
                <div class=" background-white p-4 pt-1 pb-5">
                  <div class="overflow-hidden light-green py-10 px-10 mx-auto ">
                    <Image src={Image7} className="h-32 w-32 mx-auto" />
                  </div>
                  <div>
                    <Heading title="Boash Vac 15" classes="text-white text-center mt-5" />
                    </div>
                </div>
              </div>
              <div className=''>
                <div class=" background-white p-4 pt-1 pb-5">
                  <div class="overflow-hidden light-green py-10 px-10 mx-auto ">
                    <Image src={Image7} className="h-32 w-32 mx-auto" />
                  </div>
                  <div>
                    <Heading title="Boash Vac 15" classes="text-white text-center mt-5" />
                    </div>
                </div>
              </div>
              <div className=''>
                <div class=" background-white p-4 pt-1 pb-5">
                  <div class="overflow-hidden light-green py-10 px-10 mx-auto ">
                    <Image src={Image7} className="h-32 w-32 mx-auto" />
                  </div>
                  <div>
                    <Heading title="Boash Vac 15" classes="text-white text-center mt-5 mb-10" />
                    </div>
                </div>
              </div>
            </div>
          </div >
        </div>

    </div>
  )
}

export default Equipment