<template>
  <form v-on:submit="handleSubmit">
    <label for="username" style="margin-bottom:1000px;"> Username </label>
    <input
      v-model="username"
      type="text"
      name="username"
      placeholder="Enter Username"
    />
    <label for="password"> Password </label>
    <input
      v-model="password"
      type="password"
      name="password"
      placeholder="Password"
    />
    <!-- <label for="confirm"> Confirm Password </label>
    <input
      v-model="confirm"
      type="password"
      name="confirm"
      placeholder="Confirm Password"
    /> -->
    <button>Submit</button>
    <template v-if="isError">
      <br />
      <hr />
      {{ error }}
    </template>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
      confirm: null,
      isError: false,
      error: null,
      token: null
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();

      //Ensure fields are not empty
      if (!this.username) {
        this.isError = true;
        return (this.error = "Please enter a username");
      }

      if (!this.password) {
        this.isError = true;
        return (this.error = "Please enter a password");
      }

      // if (!this.confirm) {
      //   this.isError = true;
      //   return (this.error = "Please confirm password");
      // }

      // if (this.password !== this.confirm) {
      //   this.isError = true;
      //   return (this.error = "Passwords do not match");
      // }

      const result = await axios.post("http://18.213.45.127:5000/api/auth ", {
        username: this.username,
        password: this.password
      });

      this.token = JSON.stringify(result.headers["x-auth-token"]);
      localStorage.setItem("access_token", this.token);

      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>
