<template>
  <div>
    <v-card
      justify="center"
      align="center"
      class="mb-8 elevation-0 overflow-hidden"
    >
      <v-card-text justify="center" align="center" class="font-weight-bold text"
        >Final Generated Timetable
      </v-card-text>

      <v-data-table
        :headers="tableheader"
        dense
        class="elevation-1 mx-2"
        hide-default-footer
        :items="timetabledata"
      ></v-data-table>
      <v-card-text justify="center" align="center" class="font-weight-bold text"
        >Total Columns = No of Working days.
      </v-card-text>
      <v-card-text justify="center" align="center" class="font-weight-bold text"
        >Total rows = No of subject per day.
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["user", "count", "count1"],
  data: () => ({
    tabledata: [],
    tableheader: [],
    timetabledata: [],
    headerobject: {},
    objectdata: {},
  }),

  mounted() {
    console.log("tabledata1", this.user);
    console.log("count", this.count);
    this.generatetable_header(this.count);
    // this.generatetable_object();
    this.generatetable_data(this.user);
  },
  methods: {
    generatetable_header(data) {
      for (let i = 0; i < data; i++) {
        this.tableheader.push({
          text: "day" + (i + 1),
          value: "data" + (i + 1),
        });
      }
    },

    generatetable_data(data) {
      console.log(data);
      console.log("generatetable_datathis.objectdata", this.objectdata);
      //   console.log(this.objectdata.data);
      var datarray = [];
      //   var self = this;
      data.forEach(function (ele) {
        for (let j = 0; j < ele.subject_hours; j++) {
          datarray.push(ele.subject_name);
        }
      });
      console.log("afterloop", datarray);
      this.generatetable_object(datarray);
    },
    generatetable_object(datarray) {
      console.log(this.tableheader.length);
      var headerlength1 = this.tableheader.length;

      if (headerlength1 == 1) {
        this.globalcount = 0;
        for (let a = 0; a < this.count1; a++) {
          this.objectdata = {
            data1: datarray[this.globalcount],
          };
          this.timetabledata.push(this.objectdata);
          this.globalcount = this.globalcount + 1;
        }
      } else if (headerlength1 == 2) {
        this.globalcount = 0;
        for (let a = 0; a < this.count1; a++) {
          this.objectdata = {
            data1: datarray[this.globalcount],
            data2: datarray[this.globalcount + 1],
          };
          this.timetabledata.push(this.objectdata);
          this.globalcount = this.globalcount + 2;
        }
      } else if (headerlength1 == 3) {
        this.globalcount = 0;
        for (let a = 0; a < this.count1; a++) {
          this.objectdata = {
            data1: datarray[this.globalcount],
            data2: datarray[this.globalcount + 1],
            data3: datarray[this.globalcount + 2],
          };
          this.timetabledata.push(this.objectdata);
          this.globalcount = this.globalcount + 3;
        }
      } else if (headerlength1 == 4) {
        this.globalcount = 0;
        for (let a = 0; a < this.count1; a++) {
          this.objectdata = {
            data1: datarray[this.globalcount],
            data2: datarray[this.globalcount + 1],
            data3: datarray[this.globalcount + 2],
            data4: datarray[this.globalcount + 3],
          };
          this.timetabledata.push(this.objectdata);
          this.globalcount = this.globalcount + 4;
        }
      } else if (headerlength1 == 5) {
        this.globalcount = 0;
        for (let a = 0; a < this.count1; a++) {
          this.objectdata = {
            data1: datarray[this.globalcount],
            data2: datarray[this.globalcount + 1],
            data3: datarray[this.globalcount + 2],
            data4: datarray[this.globalcount + 3],
            data5: datarray[this.globalcount + 4],
          };
          this.timetabledata.push(this.objectdata);
          this.globalcount = this.globalcount + 5;
        }
      } else if (headerlength1 == 6) {
        this.globalcount = 0;
        for (let a = 0; a < this.count1; a++) {
          this.objectdata = {
            data1: datarray[this.globalcount],
            data2: datarray[this.globalcount + 1],
            data3: datarray[this.globalcount + 2],
            data4: datarray[this.globalcount + 3],
            data5: datarray[this.globalcount + 4],
            data6: datarray[this.globalcount + 5],
          };
          this.timetabledata.push(this.objectdata);
          this.globalcount = this.globalcount + 6;
        }
      } else if (headerlength1 == 7) {
        this.globalcount = 0;
        for (let a = 0; a < this.count1; a++) {
          this.objectdata = {
            data1: datarray[this.globalcount],
            data2: datarray[this.globalcount + 1],
            data3: datarray[this.globalcount + 2],
            data4: datarray[this.globalcount + 3],
            data5: datarray[this.globalcount + 4],
            data6: datarray[this.globalcount + 5],
            data7: datarray[this.globalcount + 6],
          };
          this.timetabledata.push(this.objectdata);
          this.globalcount = this.globalcount + 7;
        }
      }
      console.log("this.objectdata", this.objectdata);
    },
  },
};
</script>

<style>
</style>