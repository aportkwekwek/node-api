import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

const greetHandler = (name) => {
  console.log(`Hello ${name}!`);
};

const goodbyeHandler = (name) => {
  console.log(`Goodbye ${name}!`);
};

//Registering event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

myEmitter.emit("greet", "John"); // Hello World!
myEmitter.emit("goodbye", "Doe"); // Goodbye World!

myEmitter.on("error", (err) => {
  console.log(`An error occurred: ${err.message}`, err);
});

myEmitter.emit("error", new Error("Something went wrong!"));
