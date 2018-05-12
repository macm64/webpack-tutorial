var path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, '/src/index.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
