//CommonJS
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  devServer: {
    hot: true, //it's needed for HotModuleReplacementPlugin
    open: true, //open automatically a new tab
    port: 9000, // change the default port 8080
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], //CSS loader allows inject css file directly on js files
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //allows only refresh the parts than changed not the whole page
    new HtmlWebpackPlugin({
      title: 'Plugins',
    }),
  ],
};
