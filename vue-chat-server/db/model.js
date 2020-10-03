const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/chat')

const conn = mongoose.connection

conn.on('connected', () => {
    console.log('db connect success !!')
})

const userSchema = mongoose.Schema({
    username: {tyep:String, require: true},
    password: {type: String, require: true},
    header: {type: String},

})

const UserModel = mongoose.model('user',userSchema)

exports.UserModel = UserModel

const chatSchema = mongoose.Schema({
    from: {type: String, require: true},
    to: {type: String, require: true},
    chat_id: {type: String, require: true},
    content: {type: String, require: true},
    read: {type: Boolean, require: true},
    create_time: {type: String, require: true},
})

const ChatModel = mongoose.model('chat',chatSchema)

exports.ChatModel = ChatModel