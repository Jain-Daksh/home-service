import React from 'react'
import Image from 'next/image'
import Image1 from '../../assets/images/favorite.png';

const OurTeam = () => {
  const team = [
    {
      "id": 1,
      "name": "lorem",
      "position": "lorem",
      "star": "4.8",
      "review": "155",
      "rate": "30/hr",
      "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nostrum?"
    },
    {
      "id": 1,
      "name": "lorem",
      "position": "lorem",
      "star": "4.8",
      "review": "155",
      "rate": "30/hr",
      "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nostrum?"
    },
    {
      "id": 1,
      "name": "lorem",
      "position": "lorem",
      "star": "4.8",
      "review": "155",
      "rate": "30/hr",
      "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nostrum?"
    },
    {
      "id": 1,
      "name": "lorem",
      "position": "lorem",
      "star": "4.8",
      "review": "155",
      "rate": "30/hr",
      "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nostrum?"
    },
  ]
  return (
    <section className='section'>
      <div className='container-fluid bg-team ' >
        <div className=" py-18 sm:px-8 py-8 lg:px-24">
          <div className='col-span-2'>
            <h2 className='mt-24 max-w-2xl mb-4 text-5xl tracking-tight leading-none md:text-5xl xl:text-4xl sm:items-center team-heading'>
              Meet Cleaning Team
            </h2>
          </div>
          <div>
            <div class=" items-center justify-center">
              <div class="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pb-8">
                {
                  team.map((value) => (
                    <div class="relative mx-auto bg-white py-6 px-6  w-64 my-4 shadow-xl">
                      <div class="flex justify-between">
                        <div class="my-2">
                          <div class=" space-x-2">
                            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              class="w-12 h-12 rounded-full" />
                          </div>
                          <h1>{value.name}</h1>
                          <h1>{value.position}</h1>
                        </div>
                        <div class="my-2">
                          <div class="flex space-x-1">
                            <Image src={Image1} alt='text' />
                            <h6>{value.star}</h6>
                          </div>
                          <p className='text-zinc-500'>{value.review}</p>
                          <p className='text-zinc-500'>{value.rate}</p>
                        </div>
                      </div>
                      <div class="mt-8">
                        <div class=" shadow p-4 bg-gray-200	">
                          <h6>Latest Request</h6>
                          <p className='text-zinc-500'>{value.para}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div >
    </section>
  )
}

export default OurTeam