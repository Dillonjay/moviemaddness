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
	resolve: {
		extensions: ['.js','.jsx']
	},
	entry: paths.app,
	output: {
		path: paths.build,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				loader: 'babel-loader',
				include: paths.app
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
			},
			{
				test: /\.png$/,
				loader: 'url-loader'
			},
			{
				test: /\.jpg$/,
				loader: 'file-loader'
			},
			{
        		test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        		loader: 'url-loader'
      		},
      		{
        		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        		loader: 'url-loader'
      		},
      		{
        		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        		loader: 'file-loader'
      		},
      		{
        		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        		loader: 'url-loader'
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