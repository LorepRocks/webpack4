//CommonJS
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCSSExtractPlugin.loader }, 'css-loader'], //CSS loader allows inject css file directly on js files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Plugins',
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};
