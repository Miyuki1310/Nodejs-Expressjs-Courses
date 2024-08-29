const EventEmitter = require("events");
const customEmitter = new EventEmitter();

// customEmitter.on("response", () => {
//   console.error.log("data received");
// });

// customEmitter.emit("response");

// customEmitter.once("response", () => {
//   console.log("data received");
// });

// customEmitter.once("response", () => {
//   console.log("data received 2");
// });

// customEmitter.emit("response"); // it will only run once
// customEmitter.emit("response"); // it will not run again

customEmitter.on("response", (name, id) => {
  console.log(`data received user: ${name} with id: ${id}`);
});

customEmitter.emit("response", "john", 34);
