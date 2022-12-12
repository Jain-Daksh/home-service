import React from "react";

const Button = (props) => {
  const { classes } = props;
  return (
    <button
      type="button"
      className={`text-white bg-primary-color hover:bg-primary-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-base px-6 py-3.5 text-center ${classes}`}
    >{props.button}
    </button>
  );
};

export default Button;
