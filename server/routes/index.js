var express = require('express')
var router = express.Router()

// User may be null when not logged in
router.get('/', (req, res) => {
  const { user } = req
  user
    .populate('repos')
    .execPopulate()
    .then(user => {
      res.render('index', { user: JSON.stringify(user) })
    })
})

module.exports = router
