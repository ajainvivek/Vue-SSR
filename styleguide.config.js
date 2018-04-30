module.exports = {
	title: "Bloge",
	navigation: true,
	defaultExample: true,
	ribbon: {
		url: 'https://github.com/ajainvivek/bloge',
	},
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
	sections: [
		{
			name: 'Project Overview',
			content: './docs/Project-Overview.md',
		},
		{
			name: 'Components',
			sections: [
				{
					name: 'App Header',
					content: './client/components/AppHeader/src/README.md',
					component: './client/components/AppHeader/src/AppHeader.vue'
				},
				{
					name: 'Banner',
					content: './client/components/Banner/src/README.md',
					component: './client/components/Banner/src/Banner.vue'
				},
			]
		},
	],
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
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
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
