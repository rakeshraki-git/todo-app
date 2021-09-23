<template>
  <v-container class="mt-16 mx-auto" style="max-width: 800px">
    <div v-if="step == 1">
      <v-row>
        <v-col cols="4">
          <div style="font-size: 12px">Enter No of working days</div>
          <v-text-field
            v-model="newTask"
            placeholder="Enter No of working days"
            outlined
            maxlength="1"
            @keypress="isNumber(event)"
            dense
            required
          >
          </v-text-field
        ></v-col>

        <v-col cols="4">
          <div style="font-size: 12px">Enter no of subjects per day</div>
          <v-text-field
            v-model="newTask1"
            @keypress="isNumber2(event)"
            maxlength="1"
            placeholder="Enter no of subjects per day"
            outlined
            dense
          >
          </v-text-field
        ></v-col>

        <v-col cols="4">
          <div style="font-size: 12px">Enter Total subjects</div>
          <v-text-field
            v-model="newTask2"
            outlined
            @keypress="isNumber2(event)"
            maxlength="2"
            placeholder="Enter Total subjects"
            dense
            @keydown.enter="createhours_forweek"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <div v-if="equation != ''" class="ml-2">
          Total Hours for a week : <a color="red">{{ this.equation }} </a>hours.
        </div>
        <div v-if="equation != ''" class="ml-2">
          "Please enter {{ this.newTask2 }} subjects name and total working
          hours for week respectively.""
        </div>
      </v-row>
      <v-row class="mt-6">
        <div v-for="(item, i) in subjectlist" :key="i">
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="item.subject_name"
                label="subject name"
                placeholder="subject name"
              ></v-text-field>
            </v-col>
            <v-col cols="1">
              <div class="mt-6">:</div>
            </v-col>
            <v-col cols="4">
              <!-- @input="calculate_hours(item)" -->
              <v-text-field
                v-model="item.subject_hours"
                label="subject hours"
                @keypress="isNumber2(event)"
                placeholder="subject hours"
              ></v-text-field
            ></v-col>
          </v-row>
        </div>
        <div v-if="equation != ''">
          <v-btn outlined dense color="green" @click="generatetable(item)"
            >GENERATE
          </v-btn>
        </div>
      </v-row>
      <v-dialog v-model="dialog" persistent max-width="390">
        <v-card>
          <v-card-title class="text-h5"> Note! </v-card-title>
          <v-card-text v-if="dialogtext != 1"
            >No of working hours should be more than total number subjects to
            generate timetable.
          </v-card-text>
          <v-card-text v-if="dialogtext == 1"
            >The total hours of subject must be equal to 'Total hours of week'
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <Timetable v-if="step == 2" :user="this.subjectlist" />
  </v-container>
</template>
<script>
import Timetable from "@/components/timetable.vue";
export default {
  components: {
    Timetable,
  },
  data: () => ({
    tasks: [],
    dialog: false,
    equation: "",
    newTask: null,
    step: 1,
    dialogtext: "0",
    newTask1: null,
    newTask2: null,
    subjectlist: [],
  }),
  created() {},
  methods: {
    createhours_forweek() {
      this.equation = this.newTask * this.newTask1;
      console.log(this.equation);
      if (
        this.newTask == null ||
        this.newTask1 == null ||
        this.newTask2 == null
      ) {
        // alert(1);
        this.$store.commit("snackbar/showMessage", {
          content: "Please fill the fields.",
          color: "red",
        });
      } else if (this.equation < this.newTask2) {
        // alert(2);
        this.dialog = true;
        this.equation = "";
      } else {
        // alert(3);
        this.subjectlist = [];
        for (let i = 0; i < this.newTask2; i++) {
          this.subjectlist.push({
            subject_name: "",
            subject_hours: "",
          });
        }
        console.log(this.subjectlist);
      }
    },
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 55) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },

    isNumber2(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    generatetable(item) {
      console.log(item);
      console.log("this.subjectlist", this.subjectlist);
      var totalhours = 0;
      var self = this;
      self.subjectlist.forEach(function (ele) {
        totalhours = parseInt(totalhours) + parseInt(ele.subject_hours);
      });
      console.log("totalhours", totalhours);
      console.log("dialogtext", this.equation);
      if (totalhours == this.equation) {
        this.step = 2;
      } else {
        this.dialog = true;
        this.dialogtext = 1;
      }
    },
  },
};
</script>