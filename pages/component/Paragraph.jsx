import React from 'react'

function Paragraph(props) {
  const { classes = "text-md text-justify text-zinc-600 mt-10 tracking-tight" } = props;

  return (
    <p className={classes}>
      {props.paragraph}
    </p>
  )
}

export default Paragraph