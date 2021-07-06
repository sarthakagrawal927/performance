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
  } = performance;

  const mem = { totalMem, usedMem, memUseage, freeMem };
  const info = { osType, upTime, cpuModel, numCores, cpuSpeed, macA };
  return (
    <div>
      Widget
      <Cpu cpu={cpuLoad} />
      <Mem mem={mem} />
      <Info info={info} />
    </div>
  );
};

export default Widget;
