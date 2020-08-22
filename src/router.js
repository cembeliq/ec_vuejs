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
            component: () => import("./components/Cart")
        },
        {
            path: "/signin",
            alias: "/signin",
            name: "signin",
            meta: {layout: "no-header"},
            component: () => import("./components/Signin")
        },
        {
            path: "/register",
            alias: "/register",
            name: "register",
            meta: {layout: "no-header"},
            component: () => import("./components/Register")
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