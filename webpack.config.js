const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "dist")
	},
	module: {
		rules:[
			{
				test: /\.css$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"}
				]
			},

			{
				test: /\.scss$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"},
					{
						loader: "postcss-loader",
						options: {
							plugins: function () {
								return[
									require("precss"),
									require("autoprefixer")
								];
							}
						}
					},
					{loader: "sass-loader"}
				]
			}

		]
	}
}