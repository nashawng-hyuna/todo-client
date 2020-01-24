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
      items: [],
      hasData: false
    };
  },
  async created() {
    const result = await axios.get("http://localhost:3000/tasks");
    if (result.data) {
      this.hasData = true;
      return (this.items = result.data);
    }
  }
};
</script>

<style scoped></style>
