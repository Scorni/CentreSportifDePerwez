const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser")
require('dotenv').config({ path: 'variables.env' });

const createServer = require("./createServer");
const db = require("./db");

const server = createServer();


server.express.use(cookieParser());

server.express.use(bodyParser.urlencoded({limit: '50mb', extended: true,parameterLimit:50000}))
server.express.use(bodyParser.json({limit: '50mb'}));

//decode the JWT to get the user Id

server.express.use((req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET);
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
        cors :{
            credentials: true,
            origin: process.env.FRONTEND_URL
        }
    },
    response => {
        console.log(`Serveur démarré http://localhost:${response.port}`)
    }
)

