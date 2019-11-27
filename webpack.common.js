const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  cache: true,
  entry: './src/index.js',
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Common: path.resolve(__dirname, 'src/components/common'),
      Pages: path.resolve(__dirname, 'src/components/Pages'),
      Utilities: path.resolve(__dirname, 'src/Utilities'),
      Constants: path.resolve(__dirname, 'src/components/constants'),
      Services: path.resolve(__dirname, 'src/Services'),
      Reducers: path.resolve(__dirname, 'src/store/reducers'),
      Actions: path.resolve(__dirname, 'src/store/actions'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};
