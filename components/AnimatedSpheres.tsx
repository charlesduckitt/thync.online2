
import React from 'react';

interface SphereProps {
  radius: string;
  duration: string;
  size: string;
  color: string;
  delay: string;
}

const Sphere: React.FC<SphereProps> = ({ radius, duration, size, color, delay }) => {
  const style = {
    '--radius': radius,
    '--duration': duration,
    'animationDelay': delay,
  } as React.CSSProperties;

  return (
    <div 
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-revolve ${size} ${color}`}
      style={style}
    />
  );
};

const AnimatedSpheres: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
        {/* Rings */}
        <div className="absolute inset-0 border border-blue-900/50 rounded-full"></div>
        <div className="absolute inset-[100px] border border-blue-900/40 rounded-full"></div>
        <div className="absolute inset-[200px] border border-blue-900/30 rounded-full"></div>
        
        {/* Spheres */}
        <Sphere radius="300px" duration="15s" size="w-3 h-3" color="bg-blue-500" delay="0s" />
        <Sphere radius="300px" duration="15s" size="w-2 h-2" color="bg-cyan-400" delay="5s" />
        <Sphere radius="200px" duration="12s" size="w-3 h-3" color="bg-blue-600" delay="-3s" />
        <Sphere radius="200px" duration="12s" size="w-2 h-2" color="bg-cyan-500" delay="2s" />
        <Sphere radius="100px" duration="10s" size="w-2 h-2" color="bg-blue-400" delay="-7s" />
      </div>
       <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#04091A]/50 to-[#04091A]"></div>
    </div>
  );
};

export default AnimatedSpheres;
