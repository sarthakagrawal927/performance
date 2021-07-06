import React from "react";

import drawCircle from "./../utilites/canvasLoadAnimation";

const Mem = ({ mem }) => {
  const { totalMem, memUseage, freeMem, memWidgetId } = mem;
  const totalMemInGb = (totalMem / 1073741824).toFixed(2);
  const freeMemInGb = (freeMem / 1073741824).toFixed(2);
  const canvas = document.querySelector(`.${memWidgetId}`);

  drawCircle(canvas, memUseage * 100);

  return (
    <div className='col-sm-3 mem'>
      <h3>Memory Usage</h3>
      <div className='canvas-wrapper'>
        <canvas className={memWidgetId} width='200' height='200' />
        <div className='mem-text'>{memUseage * 100} %</div>
      </div>{" "}
      <div>Total Memory : {totalMemInGb} GB</div>
      <div>Free Memory : {freeMemInGb} GB</div>
    </div>
  );
};

export default Mem;
