import React from 'react'
import Image from 'next/image'
import Image1 from '../../assets/images/placeholder.png'
import Image2 from '../../assets/images/phone.png'
import Image3 from '../../assets/images/email.png'
import Image4 from '../../assets/images/time.png'
import Heading from './Heading'
import SubHeading from './SubHeading'
import ImageContainer from './ImageContainer'

const ContactUs = () => {
  return (
    <div className='container-fluid'>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="mr-auto  lg:col-span-6 ">
          <h3 className='mb-3 text-heading' itemProp='name'></h3>
          <Heading title="Contact Us" />
          <SubHeading subHeading="We Will love to here from you" />
          <div class="mt-6 mb-6">
            <div class="flex align-start">
              <div class="shrink-0">
                <div>
                  <ImageContainer src={Image1} classes={"w-6 h-6"} />
                </div>
              </div>
              <div class="grow ml-6">
                <p className='contactUs contact-us-font' itemProp='time'>Mon - Sat:- 9:00 am - 7:00 pm,</p>
              </div>
            </div>
          </div>
          <div class="mt-6 mb-6">
            <div class="flex align-start">
              <div class="shrink-0">
                <div>
                  <ImageContainer src={Image2} classes={"w-6 h-6"} />
                </div>
              </div>
              <div class="grow ml-6">
                <p className='contactUs contact-us-font' itemProp='time'>Mon - Sat:- 9:00 am - 7:00 pm,</p>
              </div>
            </div>
          </div>
          <div class="mt-6 mb-6">
            <div class="flex align-start">
              <div class="shrink-0">
                <div>
                  <ImageContainer src={Image3} classes={"w-6 h-6"} />
                </div>
              </div>
              <div class="grow ml-6">
                <p className='contactUs contact-us-font' itemProp='time'>Mon - Sat:- 9:00 am - 7:00 pm,</p>
              </div>
            </div>
          </div>
          <div class="mt-6 mb-6">
            <div class="flex align-start">
              <div class="shrink-0">
                <div>
                  <ImageContainer src={Image4} classes={"w-6 h-6"} />
                </div>
              </div>
              <div class="grow ml-6">
                <p className='contactUs contact-us-font' itemProp='time'>Mon - Sat:- 9:00 am - 7:00 pm,</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="lg:mt-0 lg:col-span-6 lg:flex "
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14510.127844554047!2d73.8154725!3d24.6053439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7bdb60d6cbac5d8!2sAlvrio%20Labs!5e0!3m2!1sen!2sin!4v1670867648428!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUs