const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  resolve: {
    alias: {
      page: path.resolve(__dirname, "src/page"),
      component: path.resolve(__dirname, "src/component"),
      util: path.resolve(__dirname, "src/util"),
    }
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: {
      index: '/dist/index.html'
    },
    hot: true,
    port: 8082
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new ExtractTextWebpackPlugin("styles.css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "js/base.js"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        }
      },
      {
        test: /\.(sc|c)ss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }]
      }
    ]
  }
};