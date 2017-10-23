const path = require('path')

module.exports = {
  entry: __dirname + '/client/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  resolve: {
    alias: {
      client: path.resolve(__dirname, 'client/'),
      server: path.resolve(__dirname, 'server/')
    }
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}
