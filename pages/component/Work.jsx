import React from 'react'
import Heading from './Heading'
import SubHeading from './SubHeading'
import Image1 from '../../assets/images/toilet (2).png';
import ImageContainer from './ImageContainer';
import Image from 'next/image';
import Paragraph from './Paragraph';
import Line from '../../assets/images/icons8-vertical-line-32.png'

const Work = () => {
  return (
    <div>
      <section className='section bgclr'>
        <div className='container-fluid work-position'>
          <div className=" py-18 sm:px-8 lg:py-8 lg:px-24">

            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>

              <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
                <div className="">
                  <Heading title="Work Step" classes="text-white" />
                  <SubHeading subHeading="How we are working ? " classes="mt-3 text-white max-w-2xl mb-4 text-5xl tracking-tight leading-none md:text-5xl xl:text-4xl sm:items-center"/>
                </div>
              </div>
            </div>
            <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
              <div className=''>
                <div class=" background-white p-4 pt-1 pb-5">
                  <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto ">
                    <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" classes=" rounded-full h-12 w-12 email " />
                  </div>
                  <div>
                    <Heading title="Application" classes="text-white text-center mt-5" />
                    <Paragraph paragraph="You fill out an application on the site or contact us in a way convenient for you." classes="text-white text-center mt-5" />
                  </div>
                </div>
              </div>
              <div className=''>
                <div class=" background-white p-4 pt-1 pb-5">
                  <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto ">
                    <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" classes=" rounded-full h-12 w-12 email " />
                  </div>
                  <div>
                    <Heading title="Application" classes="text-white text-center mt-5" />
                    <Paragraph paragraph="You fill out an application on the site or contact us in a way convenient for you." classes="text-white text-center mt-5" />
                  </div>
                </div>
              </div>
              <div className=''>
                <div class=" background-white p-4 pt-1 pb-5">
                  <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto ">
                    <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" classes=" rounded-full h-12 w-12 email " />
                  </div>
                  <div>
                    <Heading title="Application" classes="text-white text-center mt-5" />
                    <Paragraph paragraph="You fill out an application on the site or contact us in a way convenient for you." classes="text-white text-center mt-5" />
                  </div>
                </div>
              </div>
              <div className=''>
                <div class=" background-white p-4 pt-1 pb-5">
                  <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto ">
                    <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" classes=" rounded-full h-12 w-12 email " />
                  </div>
                  <div>
                    <Heading title="Application" classes="text-white text-center mt-5" />
                    <Paragraph paragraph="You fill out an application on the site or contact us in a way convenient for you." classes="text-white text-center mt-5" />
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div>
      </section >

    </div>
  )
}

export default Work