// import React from 'react'
// import ImageContainer from './ImageContainer'
// import Image1 from '../../assets/images/toilet (2).png';
// import Heading from './Heading';
// import SubHeading from './SubHeading';
// import Paragraph from './Paragraph';



// function OurServices() {
//   return (
//     <section class=" px-5 py-18 sm:px-8 lg:px-24 lg:py-32">
//         <Heading title='OUR SERVICES'/>
//         <SubHeading subHeading ="Perfect cleaness "/>
//         <SubHeading subHeading = "without efforts!"/>


//     <div class="md:flex md:flex-wrap mt-24  md:-mx-4">
//       <div class="md:w-1/2 md:px-4 lg:w-1/4">
//         <div class="bg-white rounded-lg border border-gray-300 p-6">
//         <ImageContainer src={Image1} class="mb-4" />
//         <Paragraph paragraph="Plumbing"/>
//         <Paragraph paragraph ="Services"/>
//           <p class="text-zinc-300 mt-1">You will find out an application on the site or contact us in a way convenient for you (phone e-mail ,instant message) </p>
//         </div>
//       </div>

//       <div class="md:w-1/2 md:px-4 lg:w-1/4">
//         <div class="bg-white rounded-lg border border-gray-300 p-6">
//         <ImageContainer src={Image1} class="mb-4" />
//         <Paragraph paragraph="Office Space"/>
//         <Paragraph paragraph ="Washing"/>
//           <p class="text-zinc-300 mt-1">You will find out an application on the site or contact us in a way convenient for you (phone e-mail ,instant message) </p>
//         </div>
//       </div>

//       <div class="md:w-1/2 md:px-4 lg:w-1/4">
//         <div class="bg-white rounded-lg border border-gray-300 p-6">
//         <ImageContainer src={Image1} class="mb-4" />
//         <Paragraph paragraph="Maintainance"/>
//         <Paragraph paragraph ="Cleaness"/>
//           <p class=" text-zinc-300 mt-1">You will find out an application on the site or contact us in a way convenient for you (phone e-mail ,instant message) </p>
//         </div>
//       </div>

//       <div class="md:w-1/2 md:px-4 lg:w-1/4">
//         <div class="bg-white rounded-lg border border-gray-300 p-6">
//         <ImageContainer src={Image1} class="mb-4" />
//         <Paragraph paragraph="Commercial"/>
//         <Paragraph paragraph ="Cleaning"/>
//           <p class="text-zinc-300 mt-1">You will find out an application on the site or contact us in a way convenient for you (phone e-mail ,instant message) </p>
//         </div>
//       </div>
//     </div>
//   </section>
//   )
// }

// export default OurServices

import React from 'react'
import Button from './button'
import Heading from './Heading'
import SubHeading from './SubHeading'
import Image1 from '../../assets/images/toilet (2).png';
import ImageContainer from './ImageContainer';
import Image from 'next/image';

const OurServices = () => {

  const service = [
    {
      "id": 1,
      "name": "abc",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aut neque distinctio cum necessitatibus enim tenetur quo rerum, facilis velit!",
      "image": Image1
    },
    {
      "id": 2,
      "name": "abc",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aut neque distinctio cum necessitatibus enim tenetur quo rerum, facilis velit!",
      "image": Image1
    },
    {
      "id": 3,
      "name": "abc",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aut neque distinctio cum necessitatibus enim tenetur quo rerum, facilis velit!",
      "image": Image1
    },
    {
      "id": 4,
      "name": "abc",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aut neque distinctio cum necessitatibus enim tenetur quo rerum, facilis velit!",
      "image": Image1
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
                    <Image alt='service-image' src={Image1} className="w-12 h-12" />
                    <h5 class="mb-2 text-2xl mt-4  font-semibold tracking-tight text-primary-color">{value.name}</h5>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div >
    </section >
  )
}

export default OurServices
