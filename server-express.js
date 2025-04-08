import { createServer } from "http";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Sam Smith" },
];

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' data:; script-src 'self';"
  );
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Permissions-Policy", "microphone=()");
  res.setHeader("Referrer-Policy", "no-referrer");

  next();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    res.setHeader("Content-Type", "application/json");
    if (req.url === "/api/users" && req.method === "GET") {
      res.write(JSON.stringify(users));
      res.end();
    } else if (
      req.url.match(/\/api\/users\/([0-9]+)/) &&
      req.method === "GET"
    ) {
      const id = req.url.split("/")[3];
      const user = users.find((user) => user.id == id);
      if (user) {
        res.write(JSON.stringify(user));
      } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: "User Not Found" }));
      }
      res.end();
    } else {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "Route Not Found" }));
      res.end();
    }
  });
});

const PORT = process.env.APP_PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
