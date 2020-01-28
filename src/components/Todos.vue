<template>
  <div>
    <h4 style="text-align:center;">Todo Item</h4>
    <ul>
      <template v-if="hasData">
        <TodoItem
          v-for="(item, index) in items"
          v-bind:key="item.id"
          v-bind:items="items[index]"
        />
      </template>
      <template v-else>
        <p>No items to display</p>
      </template>
    </ul>
  </div>
</template>

<script>
/*eslint-disable*/
import axios from "axios";
import TodoItem from "./TodoItem";
import OneTodo from "./OneTodo";
export default {
  name: "Todos",
  components: {
    TodoItem,
    OneTodo
  },
  data() {
    return {
      token: null,
      items: [],
      hasData: false
    };
  },
  async created() {
    this.token = JSON.parse(localStorage.getItem("access_token"));

    if (!this.token) {
      return this.$router.push("/login");
    }

    const result = await axios.get(
      "http://18.213.45.127:5000/api/tasks/?page=1&pageSize=5 ",
      {
        headers: {
          "x-auth-token": this.token
        }
      }
    );

    if (result.data) {
      this.hasData = true;
      return (this.items = result.data);
    }
  }
};
</script>

<style scoped></style>
