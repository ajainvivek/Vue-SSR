import AppHeader from "./src/AppHeader.vue"

/* istanbul ignore next */
AppHeader.install = function (Vue) {
	Vue.component(AppHeader.name, AppHeader)
}

export default AppHeader
