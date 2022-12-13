import React from 'react'
import ImageContainer from './ImageContainer'
import Image1 from '../../assets/images/51565931-professional-cleaning-lady-in-uniform-during-work.webp'
import Image2 from '../../assets/images/5-pfgsstqugfjzfnqwqf8lom32vd44s716zsuxn5s5dw.jpg'
import Heading from './Heading'
import SubHeading from './SubHeading'
import Paragraph from './Paragraph'
function AboutUs() {
  return (
    
    <div className="border-b-2 border-gray-color" id='AboutUs'>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="col-span-6 relative images-client">
        <ImageContainer
          classes={"img-fluid hidden sm:block"}
          src={Image1}
          alt={"girl"}
        />
      </div>
      <div className="col-span-5 mt-24">
      <Heading title='ABOUT COMPANY'/>
      <SubHeading subHeading='Keeping Your Home Cleaner'/>
      <p className='text-xl text-zinc-300 mt-10'>Our company has been providing professional cleaning services to residents of Minsk region for more than 7 years.Cleaning of aparments,offices and other premises after repair is a direction in which our employees have gained extensive experience</p>
      <ImageContainer 
          classes={"w-96 h-96 relative image-man"}
       src={Image2} />
      </div>
    </div>

  </div>
  )
}

export default AboutUs