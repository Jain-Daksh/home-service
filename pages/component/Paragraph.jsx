import React from 'react'

function Paragraph() {
  return (
    <p className="max-w-2xl mb-4 text-5xl tracking-tight leading-none md:text-5xl xl:text-xl sm:items-center">
      {props.paragraph}
    </p>
  )
}

export default Paragraph