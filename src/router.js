import Router from "vue-router";
import Vue from "vue";
import Todolist from "@/components/todolist.vue";
import Todopage from "@/components/todopage.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Todolist",
            component: Todolist,
        },
        {
            path: "/todopage",
            name: "todopage",
            component: Todopage,
        },

    ],

});