import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "default",
            component: function () {
                return import(
                    /* webpackChunkName: "about" */ "@/pages/default"
                );
            },
            children: [
                {
                    path: "",
                    name: "index",
                    component: require("@/pages/index.vue").default,
                },
                {
                    path: "/products",
                    name: "products",
                    component: function () {
                        return import(
                            /* webpackChunkName: "about" */ "../pages/products"
                        );
                    },
                },
                {
                    path: "/products/add",
                    name: "products-add",
                    component: function () {
                        return import(
                            /* webpackChunkName: "about" */ "../pages/products/add.vue"
                        );
                    },
                },
                {
                    path: "/category",
                    name: "category",
                    component: function () {
                        return import(
                            /* webpackChunkName: "about" */ "@/pages/category"
                        );
                    },
                },
            ],
        },
        {
            path: "/empty",
            name: "empty",
            component: function () {
                return import(/* webpackChunkName: "about" */ "@/pages/empty");
            },
            children: [
                {
                    path: "cash",
                    name: "cash",
                    component: function () {
                        return import(
                            /* webpackChunkName: "about" */ "@/pages/cash"
                        );
                    },
                },
            ],
        },
        {
            path: "*",
            redirect: "/",
        },
    ],
});
