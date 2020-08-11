require("dotenv").config({
    path: "variable.env"
});
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

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