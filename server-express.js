import { createServer } from "http";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Sam Smith" },
];

//Logging Middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

//JSON Middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

//Route Handlers
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id == id);
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User Not Found" }));
  }
  res.end();
};

const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route Not Found" }));
  res.end();
};

const createUserHandler = (req, res) => {
  let body = "";
  //Listen for data event to get the request body
  req.on("data", (chunk) => {
    body += chunk.toString(); // convert Buffer to string
  });
  console.log("body", body);
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.end(JSON.stringify(newUser));
  });
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url == "/api/users/create" && req.method == "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

const PORT = process.env.APP_PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
