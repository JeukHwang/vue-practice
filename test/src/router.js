import Vue from "vue";
import VueRouter from "vue-router";
import AllPost from "./views/AllPost";
import OnePost from "./views/OnePost";
import ErrorPage from "./views/ErrorPage";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: AllPost},
        {path:"/post", component: OnePost},
        {path: "/404", component: ErrorPage},
    ]
})

export default router;