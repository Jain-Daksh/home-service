import React from 'react'
import Nav from './Navbar'
import Image from 'next/image'
import Image1 from '../../assets/images/homepage.png'
import ImageContainer from './ImageContainer'
import SubHeading from './SubHeading'
import Button from './button'
import Image2 from '../../assets/images/icons8-starburst-shape-48.png'
import Image4 from '../../assets/images/circle.png'
// import Image3 from '../../assets/images/a211ce69-8ed9-4124-953b-a1f1681775a3.png'
import Image3 from '../../assets/images/homepage3.png'
import Images from './Images'
import Heading from './Heading'

const Title = (props) => {
  return <h3 className="text-6xl font-normal tracking-wide	 mb-3.5">{props.title}</h3>;
};
const Content = (props) => {
  return <p className="text-lg  text-zinc-500">{props.content}</p>;
};


const Homepage = () => {
  return (
    <section>
      <div className='home container-fluid'>
        <Nav />
        {/* <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">

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
              <Image src={Image3} className="h-48 w-48 relative right-32 homepage-image" />
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
        </div> */}
        <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12'>
          <div className='mr-auto lg:col-span-6'>
            <div>
              <Image src={Image2} className="h-6 w-6 star-1" />
              <Image src={Image2} className="h-6 w-6 star-2" />
              {/* <Image src={Image4} className="h-6 w-6 circle" /> */}

            </div>
            <div className='mt-28'>
              <Title title="Professional" />
              <Title title="cleaning services" />
              {/* <Title title="in Udaipur" /> */}
              <h3 className='text-6xl font-normal tracking-wide	 mb-3.5'>in <span className='text-primary-color text-decoration-line: underline underline-offset-8'>Udaipur</span></h3>
            </div>
            <div className='mt-7'>
              <Content content="While you are doing something important, we will " />
              <Content content=" put things in order in the apartment, private  house or office."></Content>
            </div>
            <div className='mt-5'>
              <div className='col-span-6'>
                <Button button="Call Us Today" />

              </div>
            </div>
            <div className='mt-8'>
              <Image src={Image3} className="hidden lg:mt-0 lg:flex h-48 w-48 z-10 relative right-32 homepage-image" />
            </div>
          </div>
          <div className='hidden lg:mt-0 lg:col-span-6 lg:flex'>
            <div className=''>
              <ImageContainer classes={"image-homepage"}
                src={Image1}
                alt={"Man"}
              ></ImageContainer>
            </div>

          </div>
          <div className='hidden lg:mt-0 lg:col-span-6 lg:flex'>
            <div className='box-homepage rounded  shadow-lg bg-white'>
              {/* <Content content="Best Cleaning Services" />
              <Content content="for your house and bussiness" /> */}
              <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-2 pb-6 text-gray-800">
                <div class=" pt-1 pb-5">
                {/* <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                  <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
                  </div> */}
                </div>
                <div class="">
                  {/* <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div> */}
                  <Content content="Best Cleaning Services" />
                  <Content content="for your house and bussiness" />
                  {/* <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div> */}
                </div>
              </div>
            </div>
          </div>

          
          {/* <div className='hidden lg:mt-0 lg:col-span-6 lg:flex'>
            <div className="circle-image"></div>
          </div> */}
        </div>
        <Images />      
      </div>
    </section>
  )
}

export default Homepage