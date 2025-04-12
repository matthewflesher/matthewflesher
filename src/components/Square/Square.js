import React from 'react';
import './Square.css';

const Square = ({ top, left, size, color }) => {
  const style = {
    width: size,
    height: size,
    backgroundColor: color,
    top,
    left,
    animation: 'pulse 2s infinite',
  };

  return <div className="square" style={style} />;
};

export default Square;
