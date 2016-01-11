var path = require('path');
var webpack = require('webpack');
module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {

      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js']
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: __dirname
    },
		{
			test: /\.css$/, loader: "style-loader!css-loader"
		}]
  }
};
// module.exports = {
// 	entry: './src/main.js',
// 	output: {
// 		path: __dirname,
// 		filename: 'bundle.js'
// 	},
// 	resolve: {root: './src'},
//     devtool: 'inline-source-map',
// 	module: {
// 		loaders: [
// 			{
// 			test: /\.js?$/,
// 			exclude: /node_modules/,
// 			loader: 'babel',
// 			query: {
// 				presets: [ 'react', "stage-2", 'es2015']
// 			}
// 			},
// 			{
// 				test: /\.css$/, loader: "style-loader!css-loader"
// 			}
// 		]
// 	}
// }
