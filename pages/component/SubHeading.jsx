import React from 'react'

function SubHeading(props) {
  return (
    <h2 className="max-w-2xl mb-4 text-5xl tracking-tight leading-none md:text-5xl xl:text-4xl sm:items-center">
      {props.subHeading}
    </h2>
  )
}

export default SubHeading