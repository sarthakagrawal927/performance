import React from "react";

function Info({ info }) {
  return (
    <div className='col-sm-3 col-sm-offset-1 cpu-info'>
      <h3>Operating System</h3>
      <div className='widget-text'>{info.osType}</div>
      <h3>Time Online</h3>
      <div className='widget-text'>{info.upTime}</div>
      <h3>Processor information</h3>
      <div className='widget-text'>
        <strong>Type:</strong> {info.cpuModel}
      </div>
      <div className='widget-text'>
        <strong>Number of Cores:</strong> {info.cpuNumCores}
      </div>
      <div className='widget-text'>
        <strong>Clock Speed:</strong> {info.cpuSpeed}
      </div>
    </div>
  );
}

export default Info;
