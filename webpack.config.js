const path = require('path')

const babelLoader = {
  test: /\.js/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  include: path.join(__dirname, 'client'),
  query: {
    presets: ['es2015', 'react', 'stage-0']
  }
}

module.exports = {
  entry: __dirname + '/client/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  devtool: 'source-maps',
  module: {
    loaders: [babelLoader]
  }
}
