module.exports = function (server) {
    const io = require('socket.io')(server)
    io.on('connection', (socket) => {
        console.log('有一个客户端连接上了')
        socket.on('sendMsg',(msg) => {
            console.log(msg)
        })
    });

}