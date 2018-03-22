module.exports = {
	components: "client/components/**/*.vue",
	defaultExample: true,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: "vue-loader"
				},
				{
					test: /\.scss$/,
					use: ["sass-loader"]
				}
			]
		}
	},
	showUsage: true,
	showCode: true
}
