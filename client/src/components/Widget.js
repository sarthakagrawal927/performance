import React from "react";
import Cpu from "./Cpu";
import Mem from "./Mem";
import Info from "./Info";
import "./widgets.css";
const Widget = ({ performance }) => {
  const {
    freeMem,
    totalMem,
    usedMem,
    memUseage,
    osType,
    upTime,
    cpuModel,
    numCores,
    cpuSpeed,
    macA,
    cpuLoad,
    isActive,
  } = performance;

  const cpuWidgetId = `cpu-widget-${macA}`;
  const memWidgetId = `mem-widget-${macA}`;

  let notActiveDiv = isActive ? "" : <div className='not-active'>Offline</div>;
  const mem = { totalMem, usedMem, memUseage, freeMem, memWidgetId };
  const info = { osType, upTime, cpuModel, numCores, cpuSpeed, macA };

  return (
    <div className='widget col-sm-12'>
      Widget
      {notActiveDiv}
      <Cpu cpu={cpuLoad} cpuWidgetId={cpuWidgetId} />
      <Mem mem={mem} />
      <Info info={info} />
    </div>
  );
};

export default Widget;
