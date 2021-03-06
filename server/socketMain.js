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
      console.log("react client ");

      Machine.find({}, (err, docs) => {
        docs.forEach((aMachine) => {
          aMachine.isActive = false;
          io.to("ui").emit("data", aMachine);
        });
      });
    } else {
      socket.disconnect(true);
    }
  });
  socket.on("disconnect", () => {
    Machine.find({ macA: macA }, (err, docs) => {
      if (docs.length > 0) {
        docs[0].isActive = false;
        io.to("ui").emit("data", docs[0]);
      }
    });
  });
  // a new machine connected make sure its new
  socket.on("initPerfData", async (data) => {
    macA = data.macA;
    let mongooseResponse = await checkAndAdd(data);
    console.log(mongooseResponse);
  });

  socket.on("perfData", (data) => {
    io.to("ui").emit("data", data);
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
