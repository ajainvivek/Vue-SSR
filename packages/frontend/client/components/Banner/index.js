import Banner from "./src/Banner.vue"

/* istanbul ignore next */
Banner.install = function (Vue) {
	Vue.component(Banner.name, Banner)
}

export default Banner
