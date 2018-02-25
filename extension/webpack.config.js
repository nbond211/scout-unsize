const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  devtool: 'source-map',
  output: {
    filename: './extension/build/unsize.js'
  },
  resolve: {
    alias: {
      style: path.resolve(__dirname, '../style')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
