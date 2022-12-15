// import React from 'react'
// import ImageContainer from './ImageContainer'
// import Image1 from '../../assets/images/51565931-professional-cleaning-lady-in-uniform-during-work.webp'
// import Image2 from '../../assets/images/5-pfgsstqugfjzfnqwqf8lom32vd44s716zsuxn5s5dw.jpg'
// import Heading from './Heading'
// import SubHeading from './SubHeading'
// import Paragraph from './Paragraph'
// function AboutUs() {
//   return (

//     <div className="border-b-2 border-gray-color" id='AboutUs'>
//     <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
//       <div className="col-span-6 relative images-client">
//         <ImageContainer
//           classes={"img-fluid hidden sm:block"}
//           src={Image1}
//           alt={"girl"}
//         />
//       </div>
//       <div className="col-span-5 mt-24">
//       <Heading title='ABOUT COMPANY'/>
//       <SubHeading subHeading='Keeping Your Home Cleaner'/>
//       <p className='text-xl text-zinc-300 mt-10'>Our company has been providing professional cleaning services to residents of Minsk region for more than 7 years.Cleaning of aparments,offices and other premises after repair is a direction in which our employees have gained extensive experience</p>
//       <ImageContainer 
//           classes={"w-96 h-96 relative image-man"}
//        src={Image2} />
//       </div>
//     </div>

//   </div>
//   )
// }

// export default AboutUs


// // import React from 'react'
// // import Heading from './Heading'
// // import Paragraph from './Paragraph'
// // import SubHeading from './SubHeading'

// // import Image1 from '../../assets/images/about-us1.jpeg'
// // import Image from 'next/image'

// // const AboutUs = () => {
// //   return (
// //     <section className='section'>
// //       <div className='container-fluid'>
// //         <div className=" py-18 sm:px-8 lg:py-8 lg:px-24">

// //           <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>

// //             <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
// //               <Image src={Image1} />
// //             </div>
// //             <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
// //               <div className="col-span-5 mt-24">
// //                 <Heading title='ABOUT COMPANY' />
// //                 <SubHeading subHeading='Keeping Your Home Cleaner' />
// //                 <p className='text-xl text-zinc-300 mt-10'>Our company has been providing professional cleaning services to residents of Minsk region for more than 7 years.Cleaning of aparments,offices and other premises after repair is a direction in which our employees have gained extensive experience</p>
// //               </div>
// //             </div>
// //             </div>

// //           </div>
// //         </div >
// //     </section >

// //   )
// // }

// // export default AboutUs


// import React from 'react'
// import Button from './button'
// import Heading from './Heading'
// import SubHeading from './SubHeading'
// import Image1 from '../../assets/images/about-us1.jpeg';
// import ImageContainer from './ImageContainer';
// import Image from 'next/image';
// import Work from './Work';
// import Image2 from '../../assets/images/homepage.png'

// const AboutUs = () => {
//   return (
//     <section className='section '>
//       <div className='container-fluid'>
//         <div className=" py-18 sm:px-8 lg:py-8 lg:px-24">

//           <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>
//           <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
//               <Image src={Image1} className="w-4/5 h-4/5"/>
//             </div>
//             <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>       
//               <div className="px-8">
//                 <Heading title="Our Services" />
//                 <SubHeading subHeading="Perfect cleaness " />
//                 <SubHeading subHeading="without efforts!" />
//                 <p className='text-xl text-zinc-300 mt-10'>Our company has been providing professional cleaning services to residents of Minsk region for more than 7 years.Cleaning of aparments,offices and other premises after repair is a direction in which our employees have gained extensive experience</p>
//               </div>
//               <Image src={Image2} className="w-3/5 h-2/6 relative top-24 left-10"/>

//             </div>           
//           </div>
//         </div>
//       </div >
//     </section >
//   )
// }

// export default AboutUs

import React from 'react'
import Heading from './Heading'
import SubHeading from './SubHeading'
import Paragraph from './Paragraph'
import ImageContainer from './ImageContainer'
import Image1 from '../../assets/images/about-us1.jpeg'
import Image from 'next/image'
import Work from './Work'

const AboutUs = () => {
  return (
    <section className='section about-us-color'>
      <div>
        <div className='container-fluid'>
          <div className=" py-18 sm:px-8 lg:py-8 lg:px-24">
            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>
              <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
                <div className="">
                  <Image src={Image1} className="w-5/6 about-image" />
                </div>
              </div>
              <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
                <div className="">
                  <Heading title='ABOUT COMPANY' />
                  <SubHeading subHeading='Keeping Your Home Cleaner' />
                  <p className='text-xl text-zinc-500 mt-10'>Our company has been providing professional cleaning services to residents of Minsk region for more than 7 years.Cleaning of aparments,offices and other premises after repair is a direction in which our employees have gained extensive experience</p>
                </div>
                <div className=''>
                  <Image src={Image1} className="w-4/6  h-4/5 mt-24 about-us2" />
                </div>
              </div>
            </div>
          </div >

        </div>
        <div className='   '>
      <div className='container-fluid work-position bgclr'>
          <div className=" py-18 sm:px-8 lg:py-8 lg:px-24">

            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>

              <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
                <div className="">
                  <Heading title="Work Step" classes="text-white" />
                  <SubHeading subHeading="How we are working ? " classes="mt-3 text-white max-w-2xl mb-4 text-5xl tracking-tight leading-none md:text-5xl xl:text-4xl sm:items-center" />
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
                    <Paragraph paragraph="You fill out an application on the site or contact us in a way convenient for you." classes="text-white text-center mt-5 mb-7" />
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
                    <Paragraph paragraph="You fill out an application on the site or contact us in a way convenient for you." classes="text-white text-center mt-5 mb-7" />
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
                    <Paragraph paragraph="You fill out an application on the site or contact us in a way convenient for you." classes="text-white text-center mt-5 mb-7" />
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
                    <Paragraph paragraph="You fill out an application on the site or contact us in a way convenient for you." classes="text-white text-center mt-5 mb-7" />
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div>
      </div >
      </div>
      

    </section>
  )
}

export default AboutUs