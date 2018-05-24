const path = require("path")
const webpack = require("webpack")

const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin")
const StringReplacePlugin = require("string-replace-webpack-plugin")
const StyleLintPlugin = require("stylelint-webpack-plugin")

const Vue = require("vue")
const VueI18n = require("vue-i18n")
const config = require("../config")

const messages = {
	main: require(`../i18n/${config.language.filename}`),
	fallback: config.fallbackLanguage ?
		require(`../i18n/${config.fallbackLanguage.filename}`) : null
}

Vue.use(VueI18n)
i18n = new VueI18n({
	locale: "main",
	fallbackLocale: messages.fallback ? "fallback" : null,
	messages
})

const commonPlugins = [
	new StringReplacePlugin(),
	new webpack.DefinePlugin({
		"process.env.NODE_ENV": JSON.stringify(config.nodeEnv),
		"PRODUCTION": config.isProduction,

		"LANGUAGE_MAIN_FILENAME": JSON.stringify(config.language.filename),
		"LANGUAGE_FALLBACK_FILENAME": config.fallbackLanguage ? JSON.stringify(config.fallbackLanguage.filename) : null,
		"LANGUAGE_ISRTL": config.language.isRTL
	}),
	new StyleLintPlugin({
		files: ["client/**/*.vue", "client/**/*.scss"]
	})
]

const doI18n = StringReplacePlugin.replace({
	replacements: [{
		pattern: /\$ts\((.+)\)/g,
		replacement: function(fullMatch, params, offset, string) {
			params = params.split(",").map((p) => eval(p))
			if (i18n.tc(...params) === params[0]) {
				// check if the translation key is defined
				// We could have used i18n.te but it does not account for fallback languages
				// We are using this instead. Uglier but does the job
				if (config.isProduction) {
					throw new Error(`[i18n] Translation key "${params[0]}" does not exist`)
				} else { // just warn in development mode
					console.warn(`[i18n] Translation key "${params[0]}" does not exist`)
				}
			}
			return i18n.tc(...params)
		}
	}]
})

module.exports = {
	devtool: config.isProduction
		? false
		: "inline-source-map",

	entry: {
		app: "./client/entry-client.js"
	},

	output: {
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/dist/",
		filename: "js/[name].[chunkhash:16].js"
	},

	resolve: {
		alias: {
			"static": path.resolve(__dirname, "../static"),
			"client": path.resolve(__dirname, "../client"),
			"components": path.resolve(__dirname, "../client/components"),
			"images": path.resolve(__dirname, "../client/images"),
			"router": path.resolve(__dirname, "../client/router"),
			"store": path.resolve(__dirname, "../client/store"),
			"styles": path.resolve(__dirname, "../client/styles"),
			"mixins": path.resolve(__dirname, "../client/mixins"),
			"views": path.resolve(__dirname, "../client/views")
		},
		extensions: [".js", ".vue", ".scss"]
	},
	resolveLoader: {
		alias: {
			"scss-loader": "sass-loader"
		}
	},
	module: {
		noParse: /es6-promise\.js$/, // avoid webpack shimming process
		rules: [
			{
				enforce: "pre",
				test: /\.(vue|js)$/,
				loader: "eslint-loader",
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					preLoaders: {
						pug: doI18n,
						html: doI18n
					},
					preserveWhitespace: false,
					postcss: [
						require("autoprefixer")({ browsers: ["last 3 versions"] }),
						require("cssnano")
					]
				}
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
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
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			}
		]
	},

	performance: {
		maxEntrypointSize: 250000,
		hints: config.isProduction ? "warning" : false
	},

	plugins: config.isProduction ? commonPlugins : commonPlugins.concat([
		new FriendlyErrorsPlugin()
	])
}
