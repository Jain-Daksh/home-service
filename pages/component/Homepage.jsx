import React from 'react'
import Nav from './Navbar'
import Image from 'next/image'
import Image1 from '../../assets/images/homepage.png'
import ImageContainer from './ImageContainer'
import SubHeading from './SubHeading'
import Button from './button'
import Image2 from '../../assets/images/icons8-starburst-shape-48.png'
// import Image3 from '../../assets/images/circle.png'
// import Image3 from '../../assets/images/a211ce69-8ed9-4124-953b-a1f1681775a3.png'
import Image3 from '../../assets/images/homepage3.png'

const Homepage = () => {
  return (
    <div className='home container-fluid'>
      <Nav />
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">

        <div className="mr-auto  lg:col-span-6 xl:mt-36 lg:mt-36">
          <Image src={Image2} className="h-6 w-6 star-1" />
          <Image src={Image2} className="h-6 w-6 star-2" />

          <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-7xl">
            Professional
          </h1>
          <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">
            cleaning services
          </h1>
          <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">
            in <span className='text-primary-color'> Dallas </span>
          </h1>
          <p className='text-xl text-zinc-500 mt-10 '> While you are doing something important, we will <br /> put things in order in the apartment, private <br /> house or office.</p>

          <div className='mt-8'>
            <Button button="Call Us Today" />
          </div>
          <div className='mt-8'>
            <Image src={Image3} className="h-48 w-48 relative right-32 homepage-image"/>
          </div>

        </div>
        <div
          className="hidden lg:mt-0 lg:col-span-6 lg:flex relative"
        >
          <ImageContainer
            classes={""}
            src={Image1}
            alt={"Man"}
          />
          <div class="w-3/4 box-homepage rounded  shadow-lg bg-white">
            <h1 class="text-gray-700  text-base py-5 px-5">
              Best Cleaning Services <br></br> for your house
            </h1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage