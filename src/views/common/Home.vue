<template>
  <div class="home">
    <h1 class="text-center">Home Page</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "home",
  computed: {
    ...mapGetters({
      data: "home/getData"
    })
  },
  mounted() {
    // this.getData();
  },
  methods: {
    ...mapActions("home", ["getData"]),
    checkObject(data) {
      return typeof data[0] == "object";
    }
  },
  filters: {
    checkDate(date) {
      const now = moment(new Date());
      const createdDate = moment(date);
      return now.diff(createdDate, "hours");
    }
  }
};
</script>
