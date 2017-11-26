const router = require('express').Router()

// User may be null when not logged in
router.get('*', (req, res) => {
  res.render('index', { user: JSON.stringify(req.user) })
})

module.exports = router
