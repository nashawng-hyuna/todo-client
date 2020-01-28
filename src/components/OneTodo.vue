<template>
  <div>
    <div v-if="hasData && click === 'get-one'">
      <h1 style="text-align:center;">Task Details</h1>
      <hr />
      <h3 style="display:inline; margin-left:5%">Title</h3>
      <span>:{{ item.title }} </span> <br />
      <br />
      <h3 style="display:inline; margin-left:5%">Description</h3>
      <span>{{ item.description }}</span> <br />
      <br />

      <h3 style="display:inline; margin-left:5%">Status</h3>
      <span>{{ item.status }}</span>
    </div>

    <div v-if="hasData && click === 'update-one'">
      <form v-on:submit="handleSubmit('update', $event)">
        <label for="title">Title </label>
        <input id="title" type="text" v-model="title" />
        <br />
        <br />
        <label for="description"> Description </label> <br />
        <textarea id="description" v-model="data" rows="10" cols="50">
        </textarea>
        <br />

        <label for="status"> Status </label>
        <input type="text" v-bind:value="status" disabled />
        <button v-on:click="markComplete">Mark as {{ status }}</button> <br />
        <br />

        <button type="submit">Update</button>
      </form>
    </div>

    <div v-if="hasData && click === 'delete-one'">
      <form v-on:submit="handleSubmit('delete', $event)">
        <label for="title">Title </label>
        <input id="title" type="text" v-bind:value="item.title" disabled />
        <br />
        <br />
        <label for="description"> Description </label> <br />
        <textarea id="description" v-model="data" rows="10" cols="50" disabled>
        </textarea>
        <br />

        <label for="status"> Status </label>
        <input type="text" v-bind:value="status" disabled />
        <button v-on:click="markComplete">Toggle</button> <br />
        <br />

        <button type="submit">Delete</button>
      </form>
    </div>
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
      hasData: false,
      token: null,
      click: null,
      id: null,
      data: "",
      status: "",
      title: ""
    };
  },

  methods: {
    markComplete() {
      event.preventDefault();
      if (this.status === "to do") {
        return (this.status = "done");
      }
      return (this.status = "to do");
    },

    async handleSubmit(operation, event) {
      event.preventDefault();

      if (operation === "update") {
        const body = {
          title: this.title,
          description: this.data,
          status: this.status
        };

        const head = {
          headers: {
            "x-auth-token": this.token
          }
        };

        await axios.put(
          `http://18.213.45.127:5000/api/tasks/${this.id}`,
          body,
          head
        );

        return this.$router.push("/");
      }

      if (operation === "delete") {
        await axios.delete(`http://18.213.45.127:5000/api/tasks/${this.id}`, {
          headers: {
            "x-auth-token": this.token
          }
        });

        return this.$router.push("/");
      }
    }
  },

  async created() {
    this.token = JSON.parse(localStorage.getItem("access_token"));
    if (!this.token) {
      return this.$router.push("/login");
    }

    const result = await axios.get(
      `http://18.213.45.127:5000/api/tasks/${this.$route.params.id}`,
      {
        headers: {
          "x-auth-token": this.token
        }
      }
    );

    const { id, click } = this.$route.params;
    this.id = id;
    this.click = click;

    const { data } = await axios.get(
      `http://18.213.45.127:5000/api/tasks/${this.id}`,
      {
        headers: {
          "x-auth-token": this.token
        }
      }
    );

    if (data) {
      this.item = data;
      this.hasData = true;
      this.data = data.description;
      this.status = data.status;
      this.title = data.title;
    }
  }
};
</script>

<style scoped></style>
