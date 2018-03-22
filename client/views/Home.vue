<template>
	<component :is="currentView"></component>
</template>

<script>
import NotFound from "./NotFound"
import { lowerCase, upperFirst } from "lodash"

export default {
	name: "Home",
	data: {
		currentView: ""
	},
	meta() {
		const { title, description } = this.meta || {
			title: "Page Title",
			desciption: "Page Description"
		}
		return {
			title,
			description
		}
	},
	created() {
		let { theme = "ally", page = "" } = this.$route.params
		const views = require(`./${theme}`)
		page = page === "" ? "home" : lowerCase(page)
		const currentView = views.default[upperFirst(page)]
		if (currentView) {
			this.currentView = currentView
			this.meta = currentView.meta()
		} else {
			this.currentView = NotFound
			this.meta = NotFound.meta()
		}
	}
}
</script>
