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
    // <section className=''>
    //   <div className='container-fluid'>
    //     <div className="grid max-w-screen-xl px-4 pb-4 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12 ">
    //       <div className="mr-auto  lg:col-span-6 ">
    //         <h3 className='mb-3 text-heading' itemProp='name'></h3>
    //         <Heading title="Contact Us" />
    //         <SubHeading subHeading="We Will love to here from you" />
    //         <div class="mt-6 mb-6">
    //           <div class="flex align-start">
    //             <div class="shrink-0">
    //               <div>
    //                 <ImageContainer src={Image1} classes={"w-6 h-6"} />
    //               </div>
    //             </div>
    //             <div class="grow ml-6">
    //               <p className='contactUs contact-us-font' itemProp='time'>Mon - Sat:- 9:00 am - 7:00 pm,</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="mt-6 mb-6">
    //           <div class="flex align-start">
    //             <div class="shrink-0">
    //               <div>
    //                 <ImageContainer src={Image2} classes={"w-6 h-6"} />
    //               </div>
    //             </div>
    //             <div class="grow ml-6">
    //               <p className='contactUs contact-us-font' itemProp='time'>Mon - Sat:- 9:00 am - 7:00 pm,</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="mt-6 mb-6">
    //           <div class="flex align-start">
    //             <div class="shrink-0">
    //               <div>
    //                 <ImageContainer src={Image3} classes={"w-6 h-6"} />
    //               </div>
    //             </div>
    //             <div class="grow ml-6">
    //               <p className='contactUs contact-us-font' itemProp='time'>Mon - Sat:- 9:00 am - 7:00 pm,</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="mt-6 mb-6">
    //           <div class="flex align-start">
    //             <div class="shrink-0">
    //               <div>
    //                 <ImageContainer src={Image4} classes={"w-6 h-6"} />
    //               </div>
    //             </div>
    //             <div class="grow ml-6">
    //               <p className='contactUs contact-us-font' itemProp='time'>Mon - Sat:- 9:00 am - 7:00 pm,</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="lg:mt-0 lg:col-span-6 lg:flex "
    //       >
    //         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14510.127844554047!2d73.8154725!3d24.6053439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7bdb60d6cbac5d8!2sAlvrio%20Labs!5e0!3m2!1sen!2sin!4v1670867648428!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    //       </div>
    //     </div>
    //   </div>
    // </section >

    <section className=''>
      <div className='container-fluid'>
        {/* <footer aria-label="Site Footer">
          <div
            class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
          >
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div>
                
                <h1>cleaning express</h1>
                <p class="max-w-xs mt-4 text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
                  cupiditate quae nam molestias.
                </p>
              </div>

              <div
                class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2"
              >
                <div>
                  <p class="font-medium text-gray-900">Services</p>

                  <nav aria-label="Footer Navigation - Services" class="mt-6">
                    <ul class="space-y-4 text-sm">
                      <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                          1on1 Coaching
                        </a>
                      </li>

                      <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                          Company Review
                        </a>
                      </li>

                      <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                          Accounts Review
                        </a>
                      </li>

                      <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                          HR Consulting
                        </a>
                      </li>

                      <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                          SEO Optimisation
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div>
                  <p class="font-medium text-gray-900">Company</p>

                  <nav aria-label="Footer Navigation - Company" class="mt-6">
                    <ul class="space-y-4 text-sm">
                      <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                          About
                        </a>
                      </li>

                      <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                          Meet the Team
                        </a>
                      </li>

                      <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                          Accounts Review
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

              </div>
              <div>
                <p class="font-medium text-gray-900">Follow Us On</p>

                <ul class="flex gap-6 mt-8">
                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      <span class="sr-only">Facebook</span>

                      <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      <span class="sr-only">Instagram</span>

                      <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      <span class="sr-only">Twitter</span>

                      <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                        />
                      </svg>
                    </a>
                  </li>


                </ul>
              </div>
            </div>
          </div>
        </footer> */}
        {/* <footer aria-label="Site Footer" class="bg-gray-100">
          <div
            class="relative mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8 "
          >
            <div class="lg:flex lg:items-end lg:justify-between">
              <div>
                <div class="flex justify-center text-teal-600 lg:justify-start">
                  <img src='' alt='image' />
                  Express Cleaning
                </div>

                <p
                  class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
                >
                  <div class="mt-6 mb-6">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <div>
                          <ImageContainer src={Image2} classes={"w-6 h-6"} />
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p className='contactUs contact-us-font' itemProp='phone'>9876543210</p>
                      </div>
                    </div>
                  </div>
                </p>
                <p
                  class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
                >
                  <div class="mt-6 mb-6">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <div>
                          <ImageContainer src={Image3} classes={"w-6 h-6"} />
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p className='contactUs contact-us-font' itemProp='email'>abc@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
              
              <nav aria-label="Footer Nav" class="">
                <ul
                  class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
                >
                  <li>
                    <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                      About
                    </a>
                  </li>

                  <li>
                    <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                      Services
                    </a>
                  </li>

                  <li>
                    <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                      Team
                    </a>
                  </li>

                  <li>
                    <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                      Testimonaial
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer> */}
        <footer aria-label="Site Footer">
          <div class="mx-auto max-w-screen-xl px-4  pb-6 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <div class="flex justify-center text-teal-600 sm:justify-start">
                  <img src='' alt='image'></img>
                  <h4>Express Cleaning</h4>
                </div>

                <p
                  class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:mx-0 sm:max-w-xs sm:text-left"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                  consequuntur amet culpa cum itaque neque.
                </p>

                <ul class="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-teal-700 transition hover:text-teal-700/75"
                    >
                      <span class="sr-only">Facebook</span>
                      <svg
                        class="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-teal-700 transition hover:text-teal-700/75"
                    >
                      <span class="sr-only">Instagram</span>
                      <svg
                        class="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-teal-700 transition hover:text-teal-700/75"
                    >
                      <span class="sr-only">Twitter</span>
                      <svg
                        class="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                        />
                      </svg>
                    </a>
                  </li>

                 
                  
                </ul>
              </div>

              <div
                class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 lg:col-span-2"
              >
                <div class="text-center sm:text-left">
                  <p class="text-lg font-medium text-teal-600">About Us</p>

                  <nav aria-label="Footer About Nav" class="mt-8">
                    <ul class="space-y-4 text-sm">
                      <li>
                        <a
                          class="text-gray-700 transition hover:text-gray-700/75"
                          href="/"
                        >
                          About Us
                        </a>
                      </li>

                      <li>
                        <a
                          class="text-gray-700 transition hover:text-gray-700/75"
                          href="/"
                        >
                          Meet the Team
                        </a>
                      </li>

                      <li>
                        <a
                          class="text-gray-700 transition hover:text-gray-700/75"
                          href="/"
                        >
                          Products
                        </a>
                      </li>

                      
                    </ul>
                  </nav>
                </div>

                <div class="text-center sm:text-left">
                  <p class="text-lg font-medium text-teal-600">Our Services</p>

                  <nav aria-label="Footer Services Nav" class="mt-8">
                    <ul class="space-y-4 text-sm">
                      <li>
                        <a
                          class="text-gray-700 transition hover:text-gray-700/75"
                          href="/"
                        >
                          Housewares
                        </a>
                      </li>

                      <li>
                        <a
                          class="text-gray-700 transition hover:text-gray-700/75"
                          href="/"
                        >
                          Office space
                        </a>
                      </li>

                      <li>
                        <a
                          class="text-gray-700 transition hover:text-gray-700/75"
                          href="/"
                        >
                          Maintenance

                        </a>
                      </li>

                      <li>
                        <a
                          class="text-gray-700 transition hover:text-gray-700/75"
                          href="/"
                        >
                          Commercial
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* <div class="text-center sm:text-left">
                  <p class="text-lg font-medium text-teal-600">Helpful Links</p>

                  <nav aria-label="Footer Helpful Nav" class="mt-8">
                    <ul class="space-y-4 text-sm">
                      <li>
                        <a
                          class="text-gray-700 transition hover:text-gray-700/75"
                          href="/"
                        >
                          FAQs
                        </a>
                      </li>

                      <li>
                        <a
                          class="text-gray-700 transition hover:text-gray-700/75"
                          href="/"
                        >
                          Support
                        </a>
                      </li>

                      <li>
                        <a
                          class="group flex justify-center gap-1.5 sm:justify-start"
                          href="/"
                        >
                          <span
                            class="text-gray-700 transition group-hover:text-gray-700/75"
                          >
                            Live Chat
                          </span>

                          <span class="relative -mr-2 flex h-2 w-2">
                            <span
                              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                            ></span>
                            <span
                              class="relative inline-flex h-2 w-2 rounded-full bg-teal-500"
                            ></span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div> */}

                <div class="text-center sm:text-left">
                  <p class="text-lg font-medium text-teal-600">Contact Us</p>

                  <ul class="mt-8 space-y-4 text-sm">
                    <li>
                      <a
                        class="flex items-center justify-center gap-1.5 sm:justify-start"
                        href="/"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 shrink-0 text-gray-900"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>

                        <span class="text-gray-700">abc@gmail.com</span>
                      </a>
                    </li>

                    <li>
                      <a
                        class="flex items-center justify-center gap-1.5 sm:justify-start"
                        href="/"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 shrink-0 text-gray-900"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>

                        <span class="text-gray-700">0123456789</span>
                      </a>
                    </li>

                    <li
                      class="flex items-start justify-center gap-1.5 sm:justify-start"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                      <address class="-mt-0.5 not-italic text-gray-700">
                        abc 
                      </address>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </section >


  )
}

export default ContactUs