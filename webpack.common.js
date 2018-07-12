const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: [
                /node_modules/,
              ],
              use: ['babel-loader']
          },
          {
            test: /\.scss$/,
            use: [
              process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.(png|svg|jpg|mp4)$/i,
            use: [
              'file-loader'
            ]
        }
      ]
  },
  devServer: {
    historyApiFallback: true,
  },
};