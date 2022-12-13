import React from 'react'
import ImageContainer from './ImageContainer'
import Image3 from '../../assets/images/email.png';
import Heading from './Heading';
import SubHeading from './SubHeading';


function Work() {
  return (
    <section className='bgclr relative  px-5 py-18 sm:px-8 lg:px-24 lg:py-64 mt-30 text-white '>
    <Heading title='WORK STEPS'/>
    <SubHeading  subHeading='How we are working?'/>
        <div class="row-span">
          <div class="grid grid-cols-4 gap-4  text-center" data-aos="fade-up" data-aos-delay="">
            <div>
              <div className=' w-14 h-14 '>
              <ImageContainer src={Image3} classes=" rounded-full h-12 w-12 email "/>
              </div>
              <h3>Justin Daniel</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts.</p>
            </div>

            <div class="person">
            <ImageContainer src={Image3} classes=" rounded-full h-12 w-12 email "/>
              <h3>Justin Daniel</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts.</p>
            </div>
            <div class="person">
            <ImageContainer src={Image3} classes=" rounded-full h-12 w-12 email "/>
              <h3>Justin Daniel</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts.</p>
            </div>
            <div class="person">
            <ImageContainer src={Image3} classes=" rounded-full h-12 w-12 email "/>
              <h3>Justin Daniel</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts.</p>
            </div>
          </div>
          
       
          </div>
    </section>
  )
}

export default Work