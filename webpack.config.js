const path = require('path')
const webpack = require('webpack')
module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    __dirname + '/client/app.js'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
    publicPath: ''
  },
  resolve: {
    alias: {
      client: path.resolve(__dirname, 'client/'),
      server: path.resolve(__dirname, 'server/')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-0']
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
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file-loader'
      }
    ]
  }
}
