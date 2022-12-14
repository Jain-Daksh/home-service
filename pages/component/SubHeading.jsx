import React from 'react'
function SubHeading(props) {
  const { classes = "max-w-2xl mb-4 text-5xl tracking-tight leading-none md:text-5xl xl:text-5xl sm:items-center sm:text-xl" } = props;

  return (
    <h2 className={classes}>
      {props.subHeading}
    </h2>
  )
}
export default SubHeading

