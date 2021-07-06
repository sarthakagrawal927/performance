import React, { useState, useEffect } from "react";
import socket from "./utilites/socketConnection";

function App() {
  const [performance, setPerformance] = useState({});
  useEffect(() => {
    socket.on("data", (data) => {
      console.log(data);
      setPerformance(data);
    });
  }, [performance]);
  return <div className='App'></div>;
}

export default App;
