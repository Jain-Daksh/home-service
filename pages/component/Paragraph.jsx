import React from 'react'

function Paragraph(props) {
  return (
    <p className="max-w-2xl text-5xl tracking-tight leading-none md:text-5xl xl:text-2xl sm:items-center text-primary-color">
      {props.paragraph}
    </p>
  )
}

export default Paragraph