import React from 'react'

const Heading = (props) => {
  return (
    <h1 className="max-w-2xl mb-4 text-8xl tracking-tight leading-none md:text-5xl xl:text-3xl sm:items-center">
    {props.title}
    hi
  </h1>
  )
}

export default Heading;