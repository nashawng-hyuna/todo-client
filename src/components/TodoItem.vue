<template>
  <div>
    <p>{{ items.title }} <br /></p>
    <button v-on:click="getOne">View</button>
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
        params: { id: this.items.id }
      });
    }
  }
};
</script>

<style scoped></style>
