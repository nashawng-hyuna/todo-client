<template>
  <div>
    <nav style="background-color:green; padding:1%">
      <ul>
        <li style="display:inline; margin-right:5%;">
          <router-link to="/welcome"> Home </router-link>
        </li>
        <li style="display:inline; margin-right:5%">
          <router-link to="/"> Todos </router-link>
        </li>

        <!-- <li style="display:inline;  margin-right:5%">
          <router-link to="/register">Register </router-link>
        </li> -->

        <li style="display:inline; margin-right:5%">
          <router-link to="/login"> Login </router-link>
        </li>

        <li style="display:inline; color:green">
          <a href="#" v-on:click="logout">Logout</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      this.$router.push("/welcome");
    }
  }
};
</script>
