export default function(VueRouter){
    const routes = [
        {
            path:'/',
            component: require('../views/index.vue')
        }
    ]


    var router = new VueRouter({
        mode:'history',
        routes
    })
    return router
}