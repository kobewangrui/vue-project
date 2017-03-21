import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './config/router'


Vue.use(VueRouter)
var router = Router(VueRouter)
new Vue({
    router
}).$mount('#app')