const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: { rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }] },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
