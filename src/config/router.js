export default function(VueRouter){
    const routes = [
        {
            path:'/',
            component: require('../views/index.vue')
        }
    ]
}

const router = new VueRouter({
    mode: 'history',
    routes
})