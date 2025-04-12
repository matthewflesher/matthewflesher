import React, { useEffect, useState } from 'react';
import './PipeAnimation.css';

const PipeAnimation = () => {
  const [circles, setCircles] = useState([]);
  const [tetrisShapes, setTetrisShapes] = useState([]);
  const countSinceLastShapeRef = React.useRef(0);


  useEffect(() => {
    const interval = setInterval(() => {
      const size = Math.random() * 30 + 20;
      const color = `hsl(${Math.random() * 360}, 70%, 60%)`;
      const top = Math.random() * (window.innerHeight / 2) + 50; // top half
      const id = Date.now() + Math.random();

      setCircles(prev => [...prev, { id, top, size, color }]);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handleCircleDone = (circle) => {
    setCircles(prev => prev.filter(c => c.id !== circle.id));

    countSinceLastShapeRef.current += 1;

    if (countSinceLastShapeRef.current >= Math.floor(Math.random() * 6) + 5) {
      spawnTetrisShape();
      countSinceLastShapeRef.current = 0;
    }
  };

  const spawnTetrisShape = () => {
    const size = 30;
    const color = `hsl(${Math.random() * 360}, 70%, 60%)`;
  
    const pipeX = window.innerWidth * 0.5;
    const pipeY = window.innerHeight * 0.4;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const xOffset = screenWidth < 600 ? 120 : 260;
    const yOffset = screenHeight < 600 ? 200 : 200;
  
    const shapes = {
      T: [[0,0], [1,0], [2,0], [1,1]],
      L: [[0,0], [0,1], [0,2], [1,2]],
      I: [[0,0], [1,0], [2,0], [3,0]],
      O: [[0,0], [1,0], [0,1], [1,1]],
      Z: [[0,0], [1,0], [1,1], [2,1]],
    };
  
    const shapeKeys = Object.keys(shapes);
    const shape = shapes[shapeKeys[Math.floor(Math.random() * shapeKeys.length)]];
  
    const shapeId = Date.now();
  
    const launchedBlocks = shape.map(([x, y], i) => ({
      // id: `${shapeId}-${i}`,
      id: `${shapeId}-${i}-${Math.floor(Math.random() * 1000)}`,
      initialTop: pipeY + 20, // slightly inside the pipe
      initialLeft: pipeX + 10, // inside pipe's horizontal center
      targetTop: pipeY + yOffset + y * size,  // big vertical drop
      targetLeft: pipeX + xOffset + x * size, // shoot far right
      size,
      color,
    }));
  
    setTetrisShapes(prev => [...prev, ...launchedBlocks]);
  
    setTimeout(() => {
      setTetrisShapes(prev => prev.filter(s => !s.id.startsWith(`${shapeId}`)));
    }, 3000); // a bit shorter now
  };
   

  return (
    <>
    <div className="canvas">
      <div className="title">
        <img src="/fsd.png" alt="Logo" className="logo" />
      </div>
      {circles.map(circle => (
        <div
            key={circle.id}
            className="circle"
            style={{
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            '--initial-top': `${circle.top}px`,
            }}
            onAnimationEnd={() => handleCircleDone(circle)}
        />
      ))}
      <img src="/nerd.png" alt="Nerd face" className="nerd-face" />
      <img src="desk.png" alt="Desk" className="desk"/>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <img src="resume-paper.png" alt="Resume" className="resume"/>
      </a>
      <div className="pipe">
        <a href="https://12inchtails.com" target="_blank" rel="noopener noreferrer">
          <img src="/murds.png" alt="Sticker" className="pipe-sticker" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="Sticker2" className="pipe-sticker2" />
        </a>
      </div>
      
      {tetrisShapes.map(block => (
        <div
          key={block.id}
          className="square tetris"
          style={{
            top: block.initialTop,
            left: block.initialLeft,
            width: block.size,
            height: block.size,
            backgroundColor: block.color,
            '--target-top': `${block.targetTop}px`,
            '--target-left': `${block.targetLeft}px`,
          }}
        />
      ))}
    </div>
    <footer>
      <a href="mailto:mrfleshe@umich.edu" target="_blank" rel="noopener noreferrer">
        mrfleshe@umich.edu
      </a>
      <p className='copyright'>© 2025 All rights reserved.</p>
    </footer>
    </>
  );
};

export default PipeAnimation;


