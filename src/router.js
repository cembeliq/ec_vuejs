import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/",
            name: "home",
            component: () => import("./components/Home")
        },
        {
            path: "/cart",
            alias: "/cart",
            name: "cart",
            component: () => import("./components/Cart")
        },
        {
            path: "/signin",
            alias: "/signin",
            name: "signin",
            component: () => import("./components/Signin")
        },
        {
            path: "/register",
            alias: "/register",
            name: "register",
            component: () => import("./components/Register")
        },
        {
            path: "/:id",
            name: "product_detail",
            component: () => import("./components/ProductDetail")
        },
        
    ]
});