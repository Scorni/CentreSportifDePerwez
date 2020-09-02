const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config({
    path: "variable.env"
});
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

server.express.use(cookieParser());

//decode the JWT to get the user Id

server.express.use((req, res, next) => {
    const { token } = req.cookies;
    if (token) {
      const { userId } = jwt.verify(token, "test123");
      req.userId = userId;
     }
     next();
  });

//second middlewaire for populatin user on each request

server.express.use(async( req,res,next) => {
    if(!req.userId) return next();
    const user = await db.query.user(
        { where: {id: req.userId}},
        '{id,permissions,email,name}'
    );
    req.user = user;
    next()
})
server.start(
    {
        
    },
    response => {
        console.log(`Serveur démarré http://localhost:${response.port}`)
    }
)

