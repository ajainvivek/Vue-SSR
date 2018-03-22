module.exports = {
	components: "client/components/**/*.vue",
	defaultExample: true,
	require: [
		"./styleguide/scripts.js",
		"./node_modules/element-ui/packages/theme-chalk/lib/index.css"
	],
	theme: {
		baseBackground: "#fdfdfc",
		link: "#274e75",
		linkHover: "#90a7bf",
		border: "#e0d2de",
		font: ["Helvetica", "sans-serif"]
	},
	sections: [{
		name: "Writing Components", content: "./docs/Components.md"
	}],
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: "vue-loader"
				},
				{
					test: /\.css$/,
					use: [
						{ loader: "style-loader" },
						{ loader: "css-loader" }
					]
				},
				{
					test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
					loader: "url-loader",
					options: {
						limit: 10000,
						name: "img/[name].[hash:16].[ext]"
					}
				},
				{
					test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					loader: "url-loader?limit=10000"
				}
			]
		}
	},
	showUsage: true,
	showCode: true,
	vuex: "./client/store/index"
}
