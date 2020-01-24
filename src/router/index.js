/*eslint-disable*/
import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login";
import Register from "../components/Register";
import Todos from "../components/Todos";
import OneTodo from "../components/OneTodo";

//import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/",
      name: "Todos",
      component: Todos
    },
    {
      path: "/todo/:id",
      name: "OneTodo",
      component: OneTodo
    }
  ]
});
