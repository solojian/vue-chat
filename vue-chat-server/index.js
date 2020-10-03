const app = require('express')();
const server = require('http').createServer(app)
require('./socketIO/test')(server)
const cors = require('cors')
const router = require('./routes/index')

app.use(router)

app.use(cors())
server.listen(3000)
console.log('listen in port 3000...')