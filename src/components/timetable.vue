<template>
  <div>
    <v-data-table
      :headers="tableheader"
      dense
      :items="timetabledata"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data: () => ({
    tabledata: [],
    tableheader: [],
    timetabledata: [],
    headerobject: {},
  }),

  mounted() {
    console.log("tabledata1", this.user);
    this.generatetable_header(this.user);
    // this.generatetable_data(this.user);
  },
  methods: {
    generatetable_header(data) {
      for (let i = 0; i < data.length; i++) {
        this.tableheader.push({
          text: "day" + (i + 1),
          value: "data",
        });
      }
    },
    // generatetable_data(data) {
    //   console.log(data);
    //   console.log(this.tableheader);

    //   var self = this;

    //   data.forEach(function (ele) {
    //     if (ele.subject_hours.length > 1) {
    //       for (let k = 0; k < ele.subject_hours.length; k++) {
    //         self.timetabledata.push({
    //           data: ele.subject_name,
    //         });
    //       }
    //     }
    //   });
    //   console.log(this.timetabledata);
    // },
  },
};
</script>

<style>
</style>