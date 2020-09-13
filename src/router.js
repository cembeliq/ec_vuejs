import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/",
            name: "home",
            component: require("./pages/Home").default
        },
        {
            path: "/about-us",
            name: "about",
            meta: {layout: "no-header"},
            component: () => import("./pages/About")
        },
        {
            path: "/cart",
            alias: "/cart",
            name: "cart",
            meta: { 
                requiresAuth: true
            },
            component: () => import("./pages/Cart")
        },
        {
            path: "/checkout",
            alias: "/checkout",
            name: "checkout",
            meta: { 
                requiresAuth: true
            },
            component: () => import("./pages/Checkout")
        },
        {
            path: "/signin",
            alias: "/signin",
            name: "signin",
            meta: {layout: "no-header"},
            component: () => import("./pages/Signin")
        },
        {
            path: "/register",
            alias: "/register",
            name: "register",
            meta: {layout: "no-header"},
            component: () => import("./pages/Register")
        },
        {
            path: "/category/:categoryName",
            name: "categories_name",
            component: () => import("./pages/Home")
        },
        {
            path: "/:id",
            name: "product_detail",
            component: () => import("./pages/ProductDetail")
        },
        
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('user') == null) {
            next({
                path: '/signin',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin == 1){
                    next()
                }
                else{
                    next({ name: 'userboard'})
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else{
            next({ name: 'userboard'})
        }
    }else {
        next() 
    }
})

export default router