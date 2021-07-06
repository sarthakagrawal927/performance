import React from "react";
import drawCircle from "./../utilites/canvasLoadAnimation";
const Cpu = ({ cpu, cpuWidgetId }) => {
  const canvas = document.querySelector(`.${cpuWidgetId}`);
  drawCircle(canvas, cpu);
  return (
    <div className='col-sm-3 cpu'>
      <h3>CPU Load</h3>
      <div className='canvas-wrapper'>
        <canvas className={cpuWidgetId} width='200' height='200' />
        <div className='cpu-text'>{cpu} %</div>
      </div>
    </div>
  );
};

export default Cpu;
