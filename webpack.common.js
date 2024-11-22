const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js",
    courses: "./src/pages/courses.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/courses.html",
      chunks: ["courses"],
      filename: "courses.html",
    }),
    new webpack.ProvidePlugin({
      mnt: "moment",
      $: "jquery",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
