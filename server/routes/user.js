/* User Routes */
const router = require('express').Router()

const Repo = require('../models/Repo')

const dedupeIDs = require('../lib/dedupeIDs')

router.use(require('../lib/passport').ensureAuthenticated)

module.exports = router
