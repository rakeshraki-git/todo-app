<template>
  <v-container class="mt-16 mx-auto" style="max-width: 500px">
    <!-- // this field is for entering todos  -->
    <v-text-field
      v-model="newTask"
      label="What are you working on?"
      solo
      @keydown.enter="create"
    >
      <template v-slot:append>
        <v-fade-transition>
          <v-icon v-if="newTask" color="green" @click="create"> Create </v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>

    <v-row>
      <v-col cols="8">
        <h2 class="text-h4 success--text pl-4">My Todo's</h2>
      </v-col>
      <v-col cols="4">
        <v-btn
          v-if="tasks.length > 0"
          rounded
          color="red"
          @click="dialog = true"
          class="ml-2 mx-auto"
        >
          Clear All</v-btn
        >
      </v-col>
    </v-row>

    <v-divider class="mt-4"></v-divider>
    <!-- this is where todo's are listing -->

    <v-card class="elevation-12" v-if="tasks.length > 0">
      <template v-for="(task, i) in tasks">
        <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

        <v-list-item :key="`${i}-${task.text}`">
          <v-list-item-action>
            <v-checkbox :color="'primary'" @click="route(task, i)">
              <template v-slot:label>
                <div
                  :class="'primary--text'"
                  class="ml-4"
                  v-text="task.text"
                ></div>
              </template>
            </v-checkbox>
          </v-list-item-action>

          <v-spacer></v-spacer>

          <v-scroll-x-transition>
            <v-icon @click="deletetodoitem('2', i)" color="red">
              mdi-delete
            </v-icon>
            >
          </v-scroll-x-transition>
        </v-list-item>
      </template>
    </v-card>
    <!-- dialog -->
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Are You Sure To Clear all Todo's ?
        </v-card-title>
        <v-card-text
          >By Clicking on confirm all your Todo's from you list will be deleted.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="deletetodoitem('1')">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-spacer></v-spacer>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    tasks: [],
    newTask: null,
    dialog: false,
  }),
  created() {
    this.tasks = this.$store.getters.get_Todolist;
    console.log(this.tasks);
  },
  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.newTask,
        description: "",
      });
      this.$store.commit("SET_Todolist", this.tasks);
      console.log("df", this.$store.getters.get_Todolist);

      this.newTask = null;
    },
    deletetodoitem(count, index) {
      // console.log("value", index);
      if (count == "2") {
        this.$store.getters.get_Todolist.splice(index, 1);

        this.tasks = this.$store.getters.get_Todolist;
      }
      if (count == "1") {
        this.$store.commit("SET_Todolist", []);
        this.tasks = this.$store.getters.get_Todolist;
        this.dialog = false;
      }
    },
    route(data, i) {
      var storedata = {
        data: data,
        index: i,
      };
      this.$store.commit("SET_Todopage", storedata);
      this.$router.push("/todopage?" + data.text).catch((err) => {
        console.log("d", err);
      });
      // alert(20);
    },
  },
};
</script>