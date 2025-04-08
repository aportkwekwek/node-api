// const {
//   generateRandomNumber,
//   calculateCelciusToFahrenheit,
// } = require("./utils");

// console.log("Random Number:", generateRandomNumber());
// console.log("Celsius to Fahrenheit:", calculateCelciusToFahrenheit(25));

import getPosts, { getPostsLength } from "./src/controllers/postController.js";

console.log("Posts:", getPosts());
console.log("Posts Length:", getPostsLength());
