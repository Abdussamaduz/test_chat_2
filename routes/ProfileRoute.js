const router = require('express').Router()
const users = require('../data')
const multer = require('multer')
const AuthMiddleware = require('../middleware/auth')

router.get('/', (req, res) => {
    console.log(req.user);
    res.render('profile', {
        title: 'Profile Page',
        path: '/profile',
    })
})


var upload = multer({ dest: 'public/photos' })

router.post('/photo', upload.single('photo'), (req, res) => {
    console.log(req.body);
    res.send({
        ok: true
    })
})

module.exports = {
    path: '/profile',
    router: router
}

