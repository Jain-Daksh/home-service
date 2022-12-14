import React from 'react'
const Heading = (props) => {
  const { classes = "max-w-xl mb-4 text-xl tracking-tight leading-none md:text-xl xl:text-xl sm:items-center text-primary-color sm:text-sm	" } = props;

  return (
    <h1 className={classes}>
    {props.title}
  </h1>
  )
}
export default Heading;