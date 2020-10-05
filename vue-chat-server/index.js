const app = require('express')();
const server = require('http').createServer(app)
require('./socketIO/test')(server)
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const router = require('./routes/index')

app.use(cors())
app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

server.listen(3000)
console.log('listen in port 3000...')