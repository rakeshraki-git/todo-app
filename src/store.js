import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const snackbar = {
    namespaced: true,
    state: () => ({
        content: "",
        color: "",

    }),
    mutations: {
        showMessage(state, payload) {
            state.content = payload.content;
            state.color = payload.color;
        },
    },
};

export default new Vuex.Store({
    modules: { snackbar },
    state: {
        todolist: [{

            text: "Learn vue",
            description: "Go through the docs"
        },
        {


            text: "Fix issue 1",
            description: "data is not binding in todotab"
        },],
        todopage: 3
    },
    mutations: {
        SET_Todolist(state, status) {
            state.todolist = status;
        },
        SET_Todopage(state, status) {
            state.todopage = status;
        },

    },
    getters: {
        get_Todolist: state => {
            return state.todolist;
        },
        get_Todopage: state => {
            return state.todopage;
        },

    },

});