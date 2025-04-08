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
    const data = await fs.readFile("./public/readthisfile.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

readFile();
