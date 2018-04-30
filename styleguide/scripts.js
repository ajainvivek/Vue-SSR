import Vue from "vue"
import Element from "element-ui"
import components from "./../client/components"
import "./../client/styles/global.scss"
import VueRouter from 'vue-router'

// install components
components.map((component) => {
    Vue.component(component.name, component)
})

Vue.use(Element)
Vue.use(VueRouter)
