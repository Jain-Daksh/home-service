// import React from 'react'
// import Heading from './Heading'
// import SubHeading from './SubHeading'
// import Paragraph from './Paragraph'
// import ImageContainer from './ImageContainer'
// import Image1 from '../../assets/images/about-us1.jpeg'
// import Image from 'next/image'
// import Image2 from '../../assets/images/cleaning.png'
// import Image3 from '../../assets/images/book.png'
// import Image4 from '../../assets/images/hand-shake.png'
// import Image5 from '../../assets/images/calendar-1126.png'
// import Image6 from '../../assets/images/about2.png'
// import Equipment from './Equipment'
// import Image7 from '../../assets/images/a211ce69-8ed9-4124-953b-a1f1681775a3-removebg-preview.png'

// const AboutUs = () => {
//   return (
//     <section className='section about-us-color'>
//       <div>
//         <div className='container-fluid'>
//           <div className=" sm:px-8 lg:py-8 lg:px-24">
//             <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>
//               <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
//                 <div className="">
//                   <Image src={Image6} className="about-image absolute" />
//                 </div>
//               </div>
//               <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
//                 <div className="">
//                   <Heading title='ABOUT COMPANY' />
//                   <SubHeading subHeading='Keeping Your Home Cleaner' />
//                   <p className='text-xl tracking-wider text-zinc-500 mt-10'>Our company has been providing professional cleaning services to residents of Minsk region for more than 7 years.Cleaning of aparments,offices and other premises after repair is a direction in which our employees have gained extensive experience</p>
//                 </div>
//                 <div className=''>
//                   <Image src={Image1} className="w-4/6  h-4/5 mt-24 about-us2" />
//                 </div>
//               </div>
//             </div>
//           </div >

//         </div>
//         <div className='container-fluid work-position bgclr'>
//           <div className=" py-18 sm:px-8 lg:py-8 lg:px-24">

//             <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>

//               <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
//                 <div className="">
//                   <Heading title="Work Step" classes="text-white max-w-xl mb-4 text-xl tracking-tight leading-none md:text-xl xl:text-xl sm:items-center sm:text-sm work-heading" />
//                   <SubHeading subHeading="How we are working ? " classes="max-w-2xl mb-4 text-6xl tracking-tight leading-none md:text-5xl xl:text-6xl sm:items-center sm:text-sm 	text-white" />
//                 </div>
//               </div>
//             </div>
//             <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
//               <div className=''>
//                 <div class=" background-white p-4 pt-1 pb-5">
//                   <div class="overflow-hidden h-20 w-16 -mt-16 mx-auto ">
//                     <Image src={Image3} className="h-16 w-16" />
//                   </div>
//                   <div>
//                     <Heading title="Application" classes="text-white text-center mt-5" />
//                     <Paragraph paragraph="You fill out an application on the site or contact us in a way convenient for you." classes="text-white text-center mt-5 mb-7" />
//                   </div>
//                 </div>
//               </div>
//               <div className=''>
//                 <div class=" background-white p-4 pt-1 pb-5">
//                   <div class="overflow-hidden h-20 w-16 -mt-16 mx-auto ">
//                     <Image src={Image5} className=" h-16 w-16" />
//                   </div>
//                   <div>
//                     <Heading title="The Date" classes="text-white text-center mt-5" />
//                     <Paragraph paragraph="We agree on the day of the arrival of the master to assess the cost and plan work." classes="text-white text-center mt-5 mb-7" />
//                   </div>
//                 </div>
//               </div>
//               <div className=''>
//                 <div class=" background-white p-4 pt-1 pb-5">
//                   <div class="overflow-hidden h-20 w-16 -mt-16 mx-auto ">
//                     <Image src={Image4} className="h-16 w-16" />
//                   </div>
//                   <div>
//                     <Heading title="Hire Us" classes="text-white text-center mt-5" />
//                     <Paragraph paragraph="Sign a contract with us and we issue all the documents." classes="text-white text-center mt-5 mb-7" />
//                   </div>
//                 </div>
//               </div>
//               <div className=''>
//                 <div class=" background-white p-4 pt-1 pb-5">
//                   <div class="overflow-hidden h-20 w-16 -mt-16 mx-auto ">
//                     <Image src={Image2} className="h-16 w-16" />
//                   </div>
//                   <div>
//                     <Heading title="Cleaning" classes="text-white text-center mt-5" />
//                     <Paragraph paragraph="Our specialists qualitatively and soulfully create cleanliness in your home." classes="text-white text-center mt-5 mb-7" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div >
//         </div>
//         <div className='container-fluid'>
//           <div className="mb-24 sm:px-8 lg:px-24">

//             <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>

//               <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
//                 <div className="">
//                   <Heading title="OUR EQUIPMENT" classes="text-white max-w-xl mb-4 text-xl tracking-tight leading-none md:text-xl xl:text-xl sm:items-center sm:text-sm" />
//                   <SubHeading subHeading="Our professional equipment" classes="max-w-2xl mb-4 text-6xl tracking-tight leading-none md:text-5xl xl:text-6xl sm:items-center sm:text-sm 	text-white" />
//                 </div>
//               </div>
//             </div>
//             <div class="mt-2 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
//               <div className=''>
//                 <div class=" background-white p-4 pt-1 pb-5">
//                   <div class="overflow-hidden light-green py-10 px-10 mx-auto ">
//                     <Image src={Image7} className="h-32 w-32 mx-auto" />
//                   </div>
//                   <div>
//                     <Heading title="Boash Vac 15" classes="text-white text-center mt-5" />
//                     </div>
//                 </div>
//               </div>
//               <div className=''>
//                 <div class=" background-white p-4 pt-1 pb-5">
//                   <div class="overflow-hidden light-green py-10 px-10 mx-auto ">
//                     <Image src={Image7} className="h-32 w-32 mx-auto" />
//                   </div>
//                   <div>
//                     <Heading title="Boash Vac 15" classes="text-white text-center mt-5" />
//                     </div>
//                 </div>
//               </div>
//               <div className=''>
//                 <div class=" background-white p-4 pt-1 pb-5">
//                   <div class="overflow-hidden light-green py-10 px-10 mx-auto ">
//                     <Image src={Image7} className="h-32 w-32 mx-auto" />
//                   </div>
//                   <div>
//                     <Heading title="Boash Vac 15" classes="text-white text-center mt-5" />
//                     </div>
//                 </div>
//               </div>
//               <div className=''>
//                 <div class=" background-white p-4 pt-1 pb-5">
//                   <div class="overflow-hidden light-green py-10 px-10 mx-auto ">
//                     <Image src={Image7} className="h-32 w-32 mx-auto" />
//                   </div>
//                   <div>
//                     <Heading title="Boash Vac 15" classes="text-white text-center mt-5 mb-10" />
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div >
//         </div>

//       </div>
//     </section>
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
import Image2 from '../../assets/images/cleaning.png'
import Image3 from '../../assets/images/book.png'
import Image4 from '../../assets/images/hand-shake.png'
import Image5 from '../../assets/images/calendar-1126.png'
import Image6 from '../../assets/images/about2.png'
import Equipment from './Equipment'
import Image7 from '../../assets/images/a211ce69-8ed9-4124-953b-a1f1681775a3-removebg-preview.png'

const AboutUs = () => {
  return (
    <section className='section about-us-color'>
      <div>
        <div className='container-fluid'>
          <div className=" sm:px-8 lg:py-8 lg:px-24">
            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>
              <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
                <div className="">
                  <Image src={Image6} className="about-image absolute" />
                </div>
              </div>
              <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
                <div className="">
                  <Heading title='ABOUT COMPANY' />
                  <SubHeading subHeading='Keeping Your Home Cleaner' />
                  <p className='text-xl tracking-wider text-zinc-500 mt-10'>Our company has been providing professional cleaning services to residents of Minsk region for more than 7 years.Cleaning of aparments,offices and other premises after repair is a direction in which our employees have gained extensive experience</p>
                </div>
                <div className=''>
                  <Image src={Image1} className="w-4/6  h-4/5 mt-24 about-us2" />
                </div>
              </div>
            </div>
          </div >

        </div>
        <div className='container-fluid work-position bgclr'>
          <div className=" py-18 sm:px-8 lg:py-8 lg:px-24">

            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>

              <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
                <div className="">
                  <Heading title="Work Step" classes="text-white max-w-xl mb-4 text-xl tracking-tight leading-none md:text-xl xl:text-xl sm:items-center sm:text-sm work-heading" />
                  <SubHeading subHeading="How we are working ? " classes="max-w-2xl mb-4 text-6xl tracking-tight leading-none md:text-5xl xl:text-6xl sm:items-center sm:text-sm 	text-white" />
                </div>
              </div>
            </div>
            <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
              <div className=''>
                <div class=" background-white p-4 pt-1 pb-5">
                  <div class="overflow-hidden h-20 w-16 -mt-16 mx-auto ">
                    <Image src={Image3} className="h-16 w-16" />
                  </div>
                  <div>
                    <Heading title="Application" classes="text-white text-center mt-5" />
                    <Paragraph paragraph="You fill out an application on the site or contact us in a way convenient for you." classes="text-white text-center mt-5 mb-7" />
                  </div>
                </div>
              </div>
              <div className=''>
                <div class=" background-white p-4 pt-1 pb-5">
                  <div class="overflow-hidden h-20 w-16 -mt-16 mx-auto ">
                    <Image src={Image5} className=" h-16 w-16" />
                  </div>
                  <div>
                    <Heading title="The Date" classes="text-white text-center mt-5" />
                    <Paragraph paragraph="We agree on the day of the arrival of the master to assess the cost and plan work." classes="text-white text-center mt-5 mb-7" />
                  </div>
                </div>
              </div>
              <div className=''>
                <div class=" background-white p-4 pt-1 pb-5">
                  <div class="overflow-hidden h-20 w-16 -mt-16 mx-auto ">
                    <Image src={Image4} className="h-16 w-16" />
                  </div>
                  <div>
                    <Heading title="Hire Us" classes="text-white text-center mt-5" />
                    <Paragraph paragraph="Sign a contract with us and we issue all the documents." classes="text-white text-center mt-5 mb-7" />
                  </div>
                </div>
              </div>
              <div className=''>
                <div class=" background-white p-4 pt-1 pb-5">
                  <div class="overflow-hidden h-20 w-16 -mt-16 mx-auto ">
                    <Image src={Image2} className="h-16 w-16" />
                  </div>
                  <div>
                    <Heading title="Cleaning" classes="text-white text-center mt-5" />
                    <Paragraph paragraph="Our specialists qualitatively and soulfully create cleanliness in your home." classes="text-white text-center mt-5 mb-7" />
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div>
        {/* <div className='container-fluid'>
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
        </div> */}
        <Equipment />
      </div>
    </section>
  )
}

export default AboutUs