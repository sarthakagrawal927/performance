const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://mongo:ek0ok0MMVdw9cBrlwkFX@containers-us-west-8.railway.app:6346",
  { useNewUrlParser: true, useUnifiedTopology: true },
);

const Machine = require("./modals/Machine");

function socketMain(io, socket) {
  let macA;
  socket.on("clientAuth", (key) => {
    if (key === "skjdfbasdfasdfbew") {
      socket.join("clients");
    } else if (key === "sadasd") {
      socket.join("ui");
    } else {
      socket.disconnect(true);
    }
  });

  // a new machine connected make sure its new
  socket.on("initPerfData", async (data) => {
    macA = data.macA;
    let mongooseResponse = await checkAndAdd(data);
    console.log(mongooseResponse);
  });

  socket.on("perfData", (data) => {
    // console.log(data);
  });
}

function checkAndAdd(data) {
  return new Promise((resolve, reject) => {
    Machine.findOne({ macA: data.macA }, (err, doc) => {
      if (err) {
        throw err;
        reject(err);
      } else if (doc === null) {
        let newMachine = new Machine(data);
        newMachine.save();
        resolve("added");
      } else {
        resolve("found");
      }
    });
  });
}

module.exports = socketMain;
