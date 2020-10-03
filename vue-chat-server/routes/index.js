const router = require('express').Router()

const {
    UserModel,
    ChatModel
} = require('../db/model')
const md5 = require('blueimp-md5')
router.post('/register', (req, res) => {
    const {
        username,
        password
    } = req.body
    console.log('注册连接了')
    UserModel.findOne({
        username
    }, (err, user) => {
        if (user) {
            res.send({
                code: 1,
                msg: '此用户已存在'
            })
        } else {
            new UserModel({
                username,
                password: md5(password)
            }.save((err, user) => {
                res.cookie('userid',user_id,{maxAge:1000*60*60*24*7})
                const data = {
                    username,
                    _id: user._id
                }
                res.send({
                    code: 0,
                    data
                })
            }))

        }
    })
})

router.get('/maglist', (req, res) => {
    const userid = req.cookies.userid
    UserModel.find((err, userDoc) => {
        const users = userDoc.reduce((users, user) => {
            users[user_id] = {
                username: user.username,
                userheader: user.userheader
            }
            return users
        }, {})
    })

    ChatModel.find({
        '$or': [{
            from: userid
        }, {
            to: userid
        }]
    }, filter, (err, chatsMsg) => {
        res.send({
            code: 0,
            data: {
                user,
                chatsMsg
            }
        })
    })
})

router.post('/readMsg', (req, res) => {
    const from = req.body.from
    const to = req.cookies.userid

    ChatModel.update({
        from,
        to,
        read: false
    }, {
        read: true
    }, {
        multi: true
    }, (err, doc) => {
        res.send({
            code: 0,
            data: doc.nModified
        })
    })

})

module.exports = router