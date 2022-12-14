import React from 'react'

function Paragraph(props) {
  return (
    <p className="text-md text-justify text-zinc-600 mt-10 tracking-tight">
      {props.paragraph}
    </p>
  )
}

export default Paragraph