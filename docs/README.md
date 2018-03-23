# Bloge

Dynamic theme builder using SSR using Vue, NodeJS.

## Features

* Server Side Rendering
	* Async data fetching before rendering
	* Client hydration
	* Return the HTTP code you want
* Routing with vue-router
* State management with vuex
* Internazionalization with vue-i18n
	* Static/Compile-time i18n
	* Dynamic/Runtime i18n
* Head management
	* Title and meta tags support
* 404 Page
	* Returns 404 HTTP code
* Progressive Web App (WIP)
	* Install to home screen
* Offline support (WIP)
* Graceful error handling
	* Catch errors and handle them with ease
* Build process managed by Webpack
	* Vue Single File Components
	* Write Javascript in ES6, Babel will transpile
	* Write style in Sass, just because plain CSS is boring
	* Write templates in pug, just because plain HTML is verbose
	* Code splitting and dynamic loading
		* Separate the requirements from your code
	* Automatic generation of Service Worker
	* Uglify and minify your JS
		* Only 56kB for loading all the home page.
	* Much more
* Tests
	* Unit tests
		* Test components with avoriaz
		* Test Vuex actions and mutations
	* E2E tests
		* Test UI interaction with Nightwatch
* Fully customizable
* In-depth documentation


## Docs

Quickstart:

```
git clone https://github.com/ajainvivek/bloge
cd bloge
npm install
npm run dev
```

Check out the [official documentation](docs/Index.md) for info on how to get started and to get an idea on how everything works.

## Lighthouse Score

![Lighthouse score](docs/images/lighthouse-score.png)

## Contributing

Feel free to submit issues and pull requests, I will try to answer as soon as possible.

