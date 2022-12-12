import React from "react";
const Heading = (props) => {
  return (
    <>
      <h6 className='common-heading'>{props.title}</h6>
      <h2 className='common-subHeading'>{props.subheading}</h2>
    </>
  );
};

export default Heading;
