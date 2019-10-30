<template>
  <div class="home">
    <h1 class="text-center">Home Page</h1>
    <div class="text-center">
      <b-spinner variant="primary" label="Spinning" v-if="!checkObject(data)" class="mt-4"></b-spinner>
    </div>
    <b-list-group class="container mt-4">
      <b-list-group-item
        href="#"
        class="flex-column align-items-start"
        v-for="value in data"
        :key="value.id"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ value.product_name }}</h5>
          <small>{{ value.createdAt | checkDate }} hours ago</small>
        </div>
        <p class="mb-1">{{ value.job_type }}</p>
        <small>Price : {{ value.price }}</small>
      </b-list-group-item>
    </b-list-group>
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
    this.getData();
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
