import React from 'react'
import Nav from './Navbar'
import Image from 'next/image'
import Image1 from '../../assets/images/homepage.png'
import ImageContainer from './ImageContainer'
import SubHeading from './SubHeading'

const Homepage = () => {
  return (
    <div className='home'>
      <Nav />
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="mr-auto  lg:col-span-6 xl:mt-48 lg:mt-48">
          {/* <div> */}
          {/* <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">
              Trust is earned
            </h1>
            <h1 className="md:w-570 mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">
              through experience
            </h1>
            <h1 className="max-w-2xl text-secondary-color mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">
              let us earn yours
            </h1>
          </div>
          <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl md:w-500">
            We provide full transparency of development processes, so you can
            stay on top of your business needs
          </p> */}
          <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-7xl">
            Professional
          </h1>
          <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">
            cleaning services
          </h1>
          <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">
            in <span className='text-primary-color'> Dallas </span>
          </h1>
          <p className='text-lg mt-10 text-gray-color'> While you are doing something important, we will <br /> put things in order in the apartment, private house or office.</p>
        </div>
        <div
          className="hidden lg:mt-0 lg:col-span-6 lg:flex relative"
        >
          <ImageContainer
            classes={""}
            src={Image1}
            alt={"Man"}
          />
        </div>
      </div>
    </div>
  )
}

export default Homepage