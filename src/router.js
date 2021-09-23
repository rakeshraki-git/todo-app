import Router from "vue-router";
import Vue from "vue";
import Userdata from "@/components/userdata.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Userdata",
            component: Userdata,
        },


    ],

});