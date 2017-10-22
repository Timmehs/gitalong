const initialState = req => {
  return JSON.stringify({
    loggedIn: req.isAuthenticated(),
    user: req.session.user ? req.session.user : {}
  })
}

module.exports = {
  initialState
}
