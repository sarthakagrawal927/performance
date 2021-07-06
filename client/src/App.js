import React, { useState, useEffect } from "react";
import socket from "./utilites/socketConnection";
import Widget from "./components/Widget";
function App() {
  const [performance, setPerformance] = useState({});
  useEffect(() => {
    socket.on("data", (data) => {
      setPerformance(data);
    });
  }, []);
  console.log(performance);
  return (
    <div className='app'>
      <Widget performance={performance} />
    </div>
  );
}

export default App;
