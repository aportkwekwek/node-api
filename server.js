import http from "http";
import express from "express";
import fs from "fs/promises";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end("<h1>Homepage</h1>");
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end("<h1>About Page</h1>");
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      res.writeHead(405, { "Content-Type": "text/html" });
      res.end("<h1>Method Not Allowed</h1>");
    }
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end(`Server Error: ${err.message}`);
  }
});

const PORT = process.env.APP_PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
