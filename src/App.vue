<template>
  <!-- style="background-color: #242b2e" -->
  <v-app>
    <v-app-bar app dense color="#0D0D0D" dark>
      <div dense class="d-flex align-center"><h3>Dynamic Time Table</h3></div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view>
        <Userdata />
      </router-view>
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
// import Todolist from "./components/todolist";
import Userdata from "./components/userdata";
import Snackbar from "@/components/snackbar.vue";
export default {
  name: "App",

  components: {
    Userdata,
    Snackbar,
  },

  data: () => ({
    //
  }),
};
</script>
