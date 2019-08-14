require('dotenv').config()

var express = require('express');
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')

const portfoliodb = require('./modules/portfoliodb')

const app = express()

app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
    const help = `
  <pre>
    Welcome to the  API!

    GET /portfolio/
        USAGE:
          Get all data. 
        Params:
          empty


    POST /portfolio/framework/
        USAGE:
            Remove item.
        Params:
        {
            id: 0
            , title: ""
            , description: ""
            , image: ""
            , isapproving:false
            , isdeclining:false
        }
    
 </pre>
  `
    res.send(help)
})

app.use((req, res, next) => {
    const token = req.get('Authorization')
    if (token) {
        req.token = token
        next()
    } else {
        res.status(403).send({
            error: 'Please provide an Authorization header to identify yourself'
        })
    }
})


app.post('/portfolio/framework/', bodyParser.json(), (req, res) => {
    portfoliodb.postFramework(req.token, req.body)
        .then(
            (data) => {
                if (data.status == 'ok') {
                    io.emit("SocketFrameworksUpdate", data.entity);
                }
                res.send(data)
            },
            (error) => {
                console.error(error)
                res.status(500).send({
                    error: 'There was an error.'
                })
            }
        )
})


app.get('/portfolio/', (req, res) => {
    portfoliodb.getAll(req.token)
        .then(
            (data) => res.send(data),
            (error) => {
                console.error(error)
                res.status(500).send({
                    error: 'There was an error.'
                })
            }
        )
})



io.on("connection", socket => {
    console.log("New client connected")
    
    socket.on("SocketFrameworksConnect", function (name) {
        portfoliodb.getAllFrameworks().then(dados => {
            socket.emit("SocketFrameworksList", dados);
        })
    }

    )

    socket.on("disconnect", () => console.log("Client disconnected"));
});












server.listen(config.port, () => console.log(`Server listening on port ${config.port}`));















