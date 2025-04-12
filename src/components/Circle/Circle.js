import React, { useEffect } from 'react';
import './Circle.css';

const Circle = ({ top, size, color, onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // Match animation duration
    return () => clearTimeout(timer);
  }, [onFinish]);

  const style = {
    width: size,
    height: size,
    backgroundColor: color,
    top,
    left: -size,
  };

  return <div className="circle" style={style} />;
};

export default Circle;
