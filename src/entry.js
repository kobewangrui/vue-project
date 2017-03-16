import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './config/router'

Vue.use(VueRouter)
const router = Router(VueRouter)

var router = new VueRouter(
    {
        routes
    }
)

Vue.use(VueRouter)

new Vue({
    router
}).$mount('#app')