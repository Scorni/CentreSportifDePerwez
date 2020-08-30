const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config({
    path: "variable.env"
});
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

server.express.use(cookieParser());


server.express.use((req, res, next) => {
    const { token } = req.cookies;
    console.log(token)
    if (token) {
      const { userId } = jwt.verify(token, "test123");
      console.log("userId: " + userId)
      req.userId = userId;
      console.log("req.userId: " +req.userId)
     }
     next();
  });
server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL
        }
    },
    response => {
        console.log(`Serveur démarré http://localhost:${response.port}`)
    }
)