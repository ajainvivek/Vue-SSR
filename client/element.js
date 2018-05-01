import Vue from "vue"

if (typeof window !== "undefined") {
	const Element = require("element-ui")
	const VueAwesomeSwiper = require("vue-awesome-swiper/dist/ssr")
	Vue.use(Element)
	Vue.use(VueAwesomeSwiper)
}
