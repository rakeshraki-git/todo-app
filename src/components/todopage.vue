<template>
  <v-container class="mt-16 mx-auto" style="max-width: 500px">
    <!-- here where name and discription will be displayed and can update and delete -->
    <v-card class="elevation-6">
      <v-row class="pa-3">
        <v-col cols="12">
          <v-text-field
            v-model="name"
            label="Todo's Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            dense
            rows="1"
            auto-grow
            required
            label="Description"
            v-model="Description"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-btn class="primary elevation-6 ml-4" rounded dense @click="Update">
            Update
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn
            class="secondary elevation-6"
            dense
            rounded
            @click="dialog = true"
          >
            Delete
          </v-btn>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="3">
          <v-btn
            class="mr-16 elevation-6"
            dense
            color="red"
            rounded
            @click="
              () => {
                $router.push('/');
              }
            "
          >
            Back
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- dialog -->

    <v-dialog v-model="dialog" persistent max-width="350">
      <v-card>
        <v-card-title class="text-h5">
          Are You Sure To Delete
          {{ this.$store.getters.get_Todopage.data.text }} Todo ?
        </v-card-title>
        <v-card-text
          >By Clicking on confirm your selected Todo from you list will be
          deleted.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="clear"> Confirm </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    name: "",
    Description: "",
    dialog: false,
  }),
  created() {
    // console.log("todo", this.$store.getters.get_Todopage);
    this.name = this.$store.getters.get_Todopage.data.text;
    this.Description = this.$store.getters.get_Todopage.data.description;
  },
  methods: {
    clear() {
      this.$store.getters.get_Todolist.splice(
        this.$store.getters.get_Todopage.index,
        1
      );
      this.$router.push("/");
    },
    Update() {
      var array = this.$store.getters.get_Todolist;
      var self = this;
      array.forEach(function (ele, index) {
        if (index == self.$store.getters.get_Todopage.index) {
          (ele.text = self.name), (ele.description = self.Description);
        }
      });
      this.$store.commit("snackbar/showMessage", {
        content: "Updated succesfully",
        color: "green",
      });
      this.$router.push("/");
    },
  },
};
</script>