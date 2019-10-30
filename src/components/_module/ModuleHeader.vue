<template>
  <div class="header">
    <b-navbar class="header__navbar" toggleable="lg">
      <b-navbar-brand href="/">Passionku</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about">About</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-jumbotron
      header="Passionku is Here"
      lead="Test codebase"
      bg-variant="info"
      text-variant="white"
    ></b-jumbotron>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "mainHeader",
  computed: {
    ...mapGetters({
      getData: "getData"
    })
  }
};
</script>

<style lang="scss" scoped>
.header__navbar {
  #nav-collapse {
    a {
      color: rgba(0, 0, 0, 0.568);
    }
    .router-link-exact-active {
      color: #17a2b8 !important;
      font-weight: bold;
    }
  }
}
</style>