import React from 'react'

const Heading = (props) => {
  return (
    <h1 className="max-w-xl mb-4 text-8xl tracking-tight leading-none md:text-5xl xl:text-xl sm:items-center text-primary-color">
    {props.title}
  </h1>
  )
}

export default Heading;