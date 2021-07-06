/*
Runs on user pc and computes required data and sends it to make socket server
*/
const os = require("os");
const io = require("socket.io-client");
let socket = io("http://127.0.0.1:8181");

socket.on("connect", () => {
  const nI = os.networkInterfaces();
  let macA;
  for (let key in nI) {
    if (!nI[key][0].internal) {
      macA = nI[key][0].mac;
      break;
    }
  }
  // semd some jibberish auth token
  socket.emit("clientAuth", "skjdfbasdfasdfbew");

  // initial send and identification
  getPerformanceData().then((allPerformanceData) => {
    allPerformanceData.macA = macA;
    socket.emit("initPerfData", allPerformanceData);
  });

  let perfDataInterval = setInterval(() => {
    getPerformanceData().then((allPerformanceData) => {
      allPerformanceData.macA = macA;
      socket.emit("perfData", allPerformanceData);
    });
  }, 1000);

  socket.on("disconnect", () => {
    clearInterval(perfDataInterval);
  });
});

function getPerformanceData() {
  return new Promise(async (resolve, reject) => {
    const osType = os.type();
    const upTime = os.uptime();

    const freeMem = os.freemem();
    const totalMem = os.totalmem();
    const usedMem = totalMem - freeMem;
    const memUseage = Math.floor((usedMem / totalMem) * 100) / 100;

    const cpus = os.cpus(); // returns all threads (2 * number of cores)
    const cpuModel = cpus[0].model;
    const cpuSpeed = cpus[0].speed;
    const numCores = cpus.length;

    const cpuLoad = await getCpuLoad();
    resolve({
      freeMem,
      totalMem,
      usedMem,
      memUseage,
      osType,
      upTime,
      cpuModel,
      numCores,
      cpuSpeed,
      cpuLoad,
    });
  });
}

function cpuAverage() {
  const cpus = os.cpus();
  let idleMs = 0;
  let totalMs = 0;
  cpus.forEach((core) => {
    for (type in core.times) {
      totalMs += core.times[type];
    }
    idleMs += core.times.idle;
  });
  return { idle: idleMs / cpus.length, total: totalMs / cpus.length };
}

function getCpuLoad() {
  return new Promise((resolve, reject) => {
    const start = cpuAverage();
    setTimeout(() => {
      const end = cpuAverage();
      const idleDifference = end.idle - start.idle;
      const totalDifference = end.total - start.total;
      const percentageCpu =
        100 - Math.floor((100 * idleDifference) / totalDifference);
      resolve(percentageCpu);
    }, 100);
  });
}
