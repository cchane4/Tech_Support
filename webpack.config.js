
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
/* MODULE.EXPORTS: the entry: object is where we tell webpack to begin bundling. It’s going to read this file, take all of it’s
dependencies (and all of their dependencies), apply our loaders, then compress them, and output them as a single file.
 in our output object that file is called  bundle.js  and it’s output path: is our parent directory.
 LOADERS: we look for ( or test:) any files that end in the js or jsx extension, with the
 exception of (exclude:) anything in our node_modules folder, and then apply the babel-loader to them. The babel-loader itself then
 takes some presets and plugins that will make sure we catch all the HTML we’ve written and convert it into JavaScript*/


module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties',
                     'transform-decorators-legacy']
          }
       },
      { test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }
    ]
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  plugins: [
    new ExtractTextPlugin('src/assets/stylesheets/app.css', { allChunks: true})
  ]
};