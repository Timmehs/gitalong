const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    path.resolve(__dirname, 'client/app.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
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
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: 'cheap-eval-source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file-loader'
      }
    ]
  }
}
