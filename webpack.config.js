const path = require('path')

// Checking the pathname of this file
// console.log(__dirname)

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node-modules/,
			options: {
				presets: ['react', 'env']
			  }
		}]
	}
}
