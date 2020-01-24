<template>
  <div v-if="hasData">
    <h1 style="text-align:center;">Task Details</h1>
    <hr />
    <h3 style="display:inline; margin-left:5%">Title</h3>
    <span>:{{ item.title }} </span> <br />
    <br />
    <h3 style="display:inline; margin-left:5%">Description</h3>
    <span>{{ item.description }}</span>
  </div>
</template>

<script>
/*eslint-disable*/
import { eventBus } from "../main";
import axios from "axios";
export default {
  name: "OneTodo",
  data() {
    return {
      item: null,
      hasData: false
    };
  },

  async created() {
    const result = await axios.get(
      `http://localhost:3000/tasks/${this.$route.params.id}`
    );
    if (result.data) {
      this.item = result.data;
      this.hasData = true;
    }
  }
};
</script>

<style scoped></style>
