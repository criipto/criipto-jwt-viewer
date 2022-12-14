const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs');

module.exports = {
  mode: 'production',
  devtool: "source-map",
  experiments: {
    outputModule: true
  },
  entry: {
    'criipto-jwt-viewer.esm': {
      import: path.resolve(__dirname, 'src/index.ts'),
      library: {
        type: 'module'
      }
    },
    'criipto-jwt-viewer.cjs': {
      import: path.resolve(__dirname, 'src/index.ts'),
      library: {
        type: 'commonjs'
      }
    }
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'criipto-jwt-viewer.css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false
            }
          }
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};