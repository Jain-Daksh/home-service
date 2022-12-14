import React from 'react'
function SubHeading(props) {
  const { classes = "max-w-2xl mb-4 text-5xl tracking-tight leading-none md:text-5xl xl:text-4xl sm:items-center" } = props;

  return (
    <h2 className="max-w-3xl mb-4 text-4xl tracking-tight leading-none md:text-xl xl:text-5xl sm:items-center">
      {props.subHeading}
    </h2>
  )
}
export default SubHeading

