// import React from 'react'
// import ImageContainer from './ImageContainer'
// import Image3 from '../../assets/images/email.png';
// import Heading from './Heading';
// import SubHeading from './SubHeading';


// function Work() {
//   return (
//     <section className='bgclr relative  px-5 py-18 sm:px-8 lg:px-24 lg:py-64 mt-30 text-white '>
//     <Heading title='WORK STEPS'/>
//     <SubHeading  subHeading='How we are working?'/>
//         <div class="row-span">
//           <div class="grid grid-cols-4 gap-4  text-center" data-aos="fade-up" data-aos-delay="">
//             <div>
//               <div className=' w-14 h-14 '>
//               <ImageContainer src={Image3} classes=" rounded-full h-12 w-12 email "/>
//               </div>
//               <h3>Justin Daniel</h3>
//               <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
//               texts.</p>
//             </div>

//             <div class="person">
//             <ImageContainer src={Image3} classes=" rounded-full h-12 w-12 email "/>
//               <h3>Justin Daniel</h3>
//               <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
//               texts.</p>
//             </div>
//             <div class="person">
//             <ImageContainer src={Image3} classes=" rounded-full h-12 w-12 email "/>
//               <h3>Justin Daniel</h3>
//               <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
//               texts.</p>
//             </div>
//             <div class="person">
//             <ImageContainer src={Image3} classes=" rounded-full h-12 w-12 email "/>
//               <h3>Justin Daniel</h3>
//               <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
//               texts.</p>
//             </div>
//           </div>


//           </div>
//     </section>
//   )
// }

// export default Work


import React from 'react'

import Button from './button'
import Heading from './Heading'
import SubHeading from './SubHeading'
import Image1 from '../../assets/images/toilet (2).png';
import ImageContainer from './ImageContainer';
import Image from 'next/image';
import Paragraph from './Paragraph';
import Image3 from '../../assets/images/test.jpeg';
import Line from '../../assets/images/icons8-vertical-line-32.png'
const Work = () => {
  return (
    <section className='section bgclr'>
      <div className='container-fluid'>
        <div className=" py-18 sm:px-8 lg:py-8 lg:px-24">

          <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>

            <div className='lg:col-span-6 xl:col-span-6 md:col-span-6'>
              <div className="">
                <Heading title="Work Step" />
                <SubHeading subHeading="How we work " />
              </div>
            </div>
          </div>
          <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">

            <div className="">
              <div class="w-4/5 shadow background-white p-4 pt-1 pb-5">
                <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                  <ImageContainer src={Image3} classes=" rounded-full h-12 w-12 email " />
                </div>
              </div>
              <Paragraph paragraph="You create a story" classes={"list-disc "} />
            </div>
            <div className="">
              <div class="w-4/5 shadow background-white p-4 pt-1 pb-5">
                <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                  <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
                </div>
              </div>
              <Paragraph paragraph="You create a story" classes={"list-disc "} />
            </div>
            <div className="">
              <div class="w-4/5 shadow background-white p-4 pt-1 pb-5">
                <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                  <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
                </div>
              </div>
              <Paragraph paragraph="You create a story" classes={"list-disc "} />
            </div>
            <div className="">
              <div class="w-4/5 shadow background-white p-4 pt-1 pb-5">
                <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                  <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
                </div>
              </div>
              <Paragraph paragraph="You create a story" classes={"list-disc "} />
            </div>

          </div>
        </div >
      </div>
    </section >
  )
}

export default Work

{/* <div class=" mx-auto rounded-lg  px-5 pt-5 pb-10 " >
                <div class="w-full shadow background-white p-4 pt-1 pb-5">
                  <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                    <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
                  </div>
                </div>
                <div class="w-full mb-10">
                  <Heading title="a" />
                  <Paragraph paragraph = "a" />
                </div>
              </div> */}


{/* <div className="">
              <button
                className="p-0 w-10 h-10 bg-black rounded-full mb-2 mt-2">
                <span className="text-white">1</span>
              </button>
              <Paragraph paragraph="You create a story" classes={"list-disc "} />
            </div>
            <div className="">
              <button
                className="p-0 w-10 h-10 bg-black rounded-full mb-2 mt-2">
                <span className="text-white">2</span>
              </button>
              <Paragraph paragraph="We should provide the evaluation for our product" classes={"list-disc "} />
            </div>
            <div className="">
              <button
                className="p-0 w-10 h-10 bg-black rounded-full mb-2 mt-2">
                <span className="text-white">3</span>
              </button>
              <Paragraph paragraph="You approve" classes={"list-disc "} />
            </div>
            <div className="order-3 md:order-1">
              <button
                className="p-0 w-10 h-10 bg-black rounded-full mb-2 mt-2 ">
                <span className="text-white ">6</span>
              </button>
              <Paragraph paragraph="You approve." classes={"list-disc "} />
              <Paragraph paragraph="We do work" classes={"list-disc "} />
            </div> */}