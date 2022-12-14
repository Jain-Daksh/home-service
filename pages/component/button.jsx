import Image from "next/image";
import React from "react";
import Image2 from '../../assets/images/phone.png'
const Button = (props) => {
  const { classes } = props;
  return (
    <div>
      <button
      type="button"
      className={`text-white flex bg-primary-color hover:bg-primary-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-base px-6 py-4 text-center ${classes}`}
    ><Image src={Image2} />
      <span className="px-3">{props.button}</span>
    </button>
  
    </div>
    );
};

export default Button;
