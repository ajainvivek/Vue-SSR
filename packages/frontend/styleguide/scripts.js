import Vue from "vue"
import Element from "element-ui"
import components from "./../client/components"
import "./../client/styles/global.scss"
import VueRouter from "vue-router"
import VueAwesomeSwiper from "vue-awesome-swiper/dist/ssr"

Vue.use(Element)
Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter)

// install components
components.map((component) => {
    Vue.component(component.name, component)
})
