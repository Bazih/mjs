const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const IS_PROD = process.env.NODE_ENV === 'production';

const styleLoaders = [
  IS_PROD && {
    loader: MiniCssExtractPlugin.loader,
  },
  !IS_PROD && {
    loader: 'style-loader',
  },
  {
    loader: 'css-loader',
  },
  {
    loader: 'sass-loader',
    options: {
      webpackImporter: true,
      sourceMap: true,
    },
  },
].filter(Boolean);

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    hot: true,
    allowedHosts: 'all',
    compress: true,
    port: 3000,
    static: {
      directory: path.resolve(__dirname, 'src'),
      publicPath: '/',
    }
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    pathinfo: !IS_PROD,
    filename: 'main.[hash].js',
    assetModuleFilename: '[name].[hash][ext]',
    publicPath: '/',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css|scss$/,
        use: styleLoaders,
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['url-loader'],
      },
    ],
  },
  optimization: {
    minimize: IS_PROD ? true : false,
  },
};
