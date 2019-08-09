const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const uuid = require('uuid');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${uuid.v4()}-bundle.js`,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)\??/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
