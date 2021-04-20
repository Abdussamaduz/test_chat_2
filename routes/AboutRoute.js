const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('about', {
        title: 'AboutPage',
        path: '/about'
    })
})

module.exports = {
    path: '/about',
    router: router
}