<template>
  <v-app style="background-color: #242b2e">
    <v-app-bar app dense color="#0D0D0D" dark>
      <div dense class="d-flex align-center"><h3>My-Todo App</h3></div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view>
        <Todolist />
      </router-view>
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Todolist from "./components/todolist";
import Snackbar from "@/components/snackbar.vue";
export default {
  name: "App",

  components: {
    Todolist,
    Snackbar,
  },

  data: () => ({
    //
  }),
};
</script>
