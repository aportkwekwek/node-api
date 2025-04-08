import url from "url";
import path from "path";

const filePath = "./dir/files/file.txt";

console.log(path.basename(filePath)); // file.txt
console.log(path.dirname(filePath)); // dir/files
console.log(path.extname(filePath)); // .txt
console.log(path.parse(filePath)); // { root: '', dir: 'dir/files', base: 'file.txt', ext: '.txt', name: 'file' }

const __filename = url.fileURLToPath(import.meta.url);
console.log(`File name : ${__filename}`); // file:///path/to/your/file.js
const __dirname = path.dirname(__filename);
console.log(`Directory name : ${__dirname}`); // /path/to/your

const filePath2 = path.join(__dirname, "dir", "files", "file.txt");
console.log(filePath2);

const resolvePath = path.resolve("dir", "files", "file.txt");
console.log(resolvePath);
