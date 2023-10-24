import React from "react";

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} />;
};

export default Image;
