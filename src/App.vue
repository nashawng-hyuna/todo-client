<template>
  <div id="app">
    <template v-if="authenticated">
      <Navbar />
    </template>

    <template v-else> <UnAuthNav /> </template>

    <router-view />
  </div>
</template>

<script>
/*eslint-disable*/
import Navbar from "./components/Navbar";
import UnAuthNav from "./components/UnAuthNav";
export default {
  name: "App",
  components: {
    Navbar,
    UnAuthNav
  },
  data() {
    return {
      authenticated: false,
      token: null
    };
  },

  watch: {
    $route: function() {
      this.token = JSON.parse(localStorage.getItem("access_token"));
      if (this.token) {
        return (this.authenticated = true);
      }

      return (this.authenticated = false);
    }
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
