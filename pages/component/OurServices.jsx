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
import Heading from './Heading'
import SubHeading from './SubHeading'

const OurServices = () => {
  return (
    <section className='section'>
      <div className='container-fluid'>
        <div className=" lg:px-24">
          <Heading title="Our Services" />
          <SubHeading subHeading="Perfect cleaness " />
          <SubHeading subHeading="without efforts!" />
        </div>

      </div>
    </section>
  )
}

export default OurServices