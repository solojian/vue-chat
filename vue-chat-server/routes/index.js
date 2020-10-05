const router = require('express').Router()

const {
    UserModel,
    ChatModel
} = require('../db/model')
const md5 = require('blueimp-md5')
const filter = {
    password: 0,
    __v: 0
}

router.post('/register', (req, res) => {
    const {
        username,
        password
    } = req.body
    console.log('注册连接了', {
        username,
        password
    })
    UserModel.findOne({
        username
    }, (err, user) => {
        if (user) {
            res.send({
                code: 1,
                msg: '此用户已存在'
            });
        } else {
            new UserModel({
                username,
                password: md5(password)
            }).save((err, user) => {
                const data = {
                    username,
                    _id: user._id
                }
                res.cookie('userid', user._id, {
                    maxAge: 1000 * 60 * 60 * 24 * 7
                })

                res.send({
                    code: 0,
                    data
                })
            })
        }
    })
})

router.post('/login', (req, res) => {
    const {
        username,
        password
    } = req.body
    UserModel.findOne({
        username,
        password: md5(password)
    }, filter, (err, user) => {
        if (user) {

            res.cookie('userid', user._id, {
                maxAge: 1000 * 60 * 60 * 24 * 7
            })
            res.send({
                code: 0,
                data: user
            })
        } else {
            res.send({
                code: 1,
                errMsg: '用户名或密码不正确'
            })
        }
    })
})

router.get('/user', (req, res) => {
    const userid = req.cookies.userid
    console.log('req',req)
    if (!userid) {
        res.send({
            code: 1,
            errMsg: '请先登录'
        })
    } else {
        UserModel.findOne({
            _id: userid
        }, filter, (err, user) => {
            res.send({
                code: 0,
                data: user
            })
        })
    }
})

router.get('/msglist', (req, res) => {
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