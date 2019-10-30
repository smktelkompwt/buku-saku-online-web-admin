<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    <b-container fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/_module/ModuleHeader";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
</style>
