const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');


const paths = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	devServer: {
		inline: true,
		port: process.env.PORT,
		contentBase: paths.app
	},
	entry: paths.app,
	output: {
		path: paths.build,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test:/\.jsx?/,
				loader: 'babel-loader',
				include: paths.app
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: HtmlWebpackTemplate,
			title: 'Movie Maddness',
			appMountId: 'app',
			mobile: true,
			inject: false
		})
	]
};