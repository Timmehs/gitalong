module.exports = function(app) {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const wpConfig = require('../webpack.config.js')
  const compiler = require('webpack')(wpConfig)
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: wpConfig.output.publicPath,
      stats: {
        colors: true
      }
    })
  )
  app.use(require('webpack-hot-middleware')(compiler))
}
