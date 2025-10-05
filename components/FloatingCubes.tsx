
import React from 'react';

const Cube: React.FC<{ size: string; position: string; delay: string; duration: string }> = ({ size, position, delay, duration }) => {
  const style = {
    animationDelay: delay,
    animationDuration: duration
  } as React.CSSProperties;

  return (
    <div className={`absolute ${size} ${position} animate-float`} style={style}>
      <div className="relative w-full h-full transform-style-3d">
        <div className="absolute w-full h-full bg-blue-900/30 border border-blue-600/50 transform rotate-y-0 translate-z-[var(--size-half)]"></div>
        <div className="absolute w-full h-full bg-blue-900/30 border border-blue-600/50 transform rotate-y-90 translate-z-[var(--size-half)]"></div>
        <div className="absolute w-full h-full bg-blue-900/30 border border-blue-600/50 transform rotate-y-180 translate-z-[var(--size-half)]"></div>
        <div className="absolute w-full h-full bg-blue-900/30 border border-blue-600/50 transform rotate-y-[-90deg] translate-z-[var(--size-half)]"></div>
        <div className="absolute w-full h-full bg-blue-900/30 border border-blue-600/50 transform rotate-x-90 translate-z-[var(--size-half)]"></div>
        <div className="absolute w-full h-full bg-blue-900/30 border border-blue-600/50 transform rotate-x-[-90deg] translate-z-[var(--size-half)]"></div>
      </div>
    </div>
  );
};

const FloatingCubes: React.FC = () => {
  const cubeData = [
    { size: "w-24 h-24 [--size-half:3rem]", position: "top-[10%] left-[15%]", delay: "0s", duration: "8s" },
    { size: "w-16 h-16 [--size-half:2rem]", position: "top-[20%] right-[20%]", delay: "1s", duration: "6s" },
    { size: "w-32 h-32 [--size-half:4rem]", position: "top-[40%] left-[30%]", delay: "2.5s", duration: "10s" },
    { size: "w-20 h-20 [--size-half:2.5rem]", position: "bottom-[20%] left-[10%]", delay: "0.5s", duration: "7s" },
    { size: "w-28 h-28 [--size-half:3.5rem]", position: "bottom-[15%] right-[15%]", delay: "1.5s", duration: "9s" },
    { size: "w-12 h-12 [--size-half:1.5rem]", position: "top-[5%] right-[40%]", delay: "3s", duration: "5s" },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden perspective-1000">
      {cubeData.map((cube, i) => <Cube key={i} {...cube} />)}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#04091A]/50 to-[#04091A]"></div>
    </div>
  );
};

export default FloatingCubes;
