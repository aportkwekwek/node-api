// import fs from "fs";

// fs.readFile("./public/readthisfile.txt", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data.toString());
// });

// const data = fs.readFileSync("./public/readthisfile.txt", "utf-8");

// console.log(data.toString());

//Promise version of fs.readFile
import fs from "fs/promises";
// fs.readFile("./public/readthisfile.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const readFile = async () => {
  try {
    const data = await fs.readFile("./public/writethisfile.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const writeFile = async () => {
  try {
    await fs.writeFile("./public/writethisfile.txt", "Hello World!");
    console.log("File written successfully");
  } catch (err) {
    console.error(err);
  }
};

writeFile();

const appendFile = async () => {
  try {
    await fs.appendFile(
      "./public/writethisfile.txt",
      "\nHello World Again Appended!"
    );
    console.log("File appended successfully");
  } catch (err) {
    console.error(err);
  }
};

appendFile();

readFile();
// const fs = require("fs/promises");
