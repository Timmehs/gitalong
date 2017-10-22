var express = require('express')
var router = express.Router()

// User may be null when not logged in
router.get('/', (req, res) => {
  const { user } = req
  res.render('index', { user: JSON.stringify(user) })
})

module.exports = router
