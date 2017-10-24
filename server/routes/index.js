const router = require('express').Router()
// User may be null when not logged in
router.get('/', (req, res) => {
  const { user } = req
  if (user) {
    user
      .populate('followers following')
      .execPopulate()
      .then(user => {
        res.render('index', { user: JSON.stringify(user) })
      })
  } else {
    res.render('index', { user: null })
  }
})

module.exports = router
