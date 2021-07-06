import React from "react";
import drawCircle from "./../utilites/canvasLoadAnimation";
const Cpu = ({ cpu }) => {
  const canvas = document.querySelector("canvas");
  drawCircle(canvas, cpu);
  return (
    <div className='col-sm-3 cpu'>
      <h3>CPU Load</h3>
      <div className='canvas-wrapper'>
        <canvas className='canvas' width='200' height='200' />
        <div className='cpu-text'>{cpu} %</div>
      </div>
    </div>
  );
};

export default Cpu;
