<template>
  <div>
    <p>{{ items.title }} <br /></p>
    <button v-on:click="getOne">View</button>
    <button v-on:click="updateOne">Update</button>
    <button v-on:click="deleteOne">Delete</button>
    <hr />
  </div>
</template>

<script>
/*eslint-disable*/
import axios from "axios";
import { eventBus } from "../main";
export default {
  name: "TodoItem",

  props: {
    items: {
      type: Object,
      required: true
    }
  },
  methods: {
    async getOne() {
      return this.$router.push({
        name: "OneTodo",
        params: { id: this.items.id, click: "get-one" }
      });
    },
    async updateOne() {
      return this.$router.push({
        name: "OneTodo",
        params: { id: this.items.id, click: "update-one" }
      });
    },

    async deleteOne() {
      return this.$router.push({
        name: "OneTodo",
        params: { id: this.items.id, click: "delete-one" }
      });
    }
  },

  created() {
    const token = JSON.parse(localStorage.getItem("access_token"));
    if (!token) {
      return this.$router.push("/login");
    }
  }
};
</script>

<style scoped></style>
