import React from "react";
import Image from "next/image";

const ImageContainer = (props) => {
  const { classes = "w-14 h-14", alt = "home-service" } = props;
  return (
    <Image
      className={classes}
      src={props.src}
      alt={alt}
      width={500}
      height={500}
    />
  );
};

export default ImageContainer;
