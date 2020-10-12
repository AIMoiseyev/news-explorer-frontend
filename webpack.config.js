const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require("webpack");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

const path = require('path');

module.exports = {
  entry: {
    main: './src/pages/main/index.js',
    news: './src/pages/saved-news/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
      ],
      exclude: /node_modules/,
    },
      {
        test: /\.css$/i,
        use: [
          isDev ? { loader: 'style-loader' } : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|ico|svg|jpeg)$/,
        use: [
          "file-loader?name=./images/[name].[ext]&esModule=false",
          {
            loader: "image-webpack-loader",
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: "file-loader?name=./fonts/[name].[ext]",
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: './styles/[name].[contenthash].css'}),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default"],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/main/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/saved-news/news.html',
      filename: 'news.html',
      chunks: ['news'],
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
