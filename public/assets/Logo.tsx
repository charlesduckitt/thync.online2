import React from "react";
import logoPng from "./logo.png";

type LogoProps = {
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
};

const Logo: React.FC<LogoProps> = ({
  className,
  alt = "Logo",
  width,
  height,
}) => {
  return (
    <img
      src={logoPng}
      alt={alt}
      className={className || "h-8 w-8 object-contain"}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
  );
};

export default Logo;
