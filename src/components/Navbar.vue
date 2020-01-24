<template>
  <div>
    <nav style="background-color:green; padding:1%">
      <ul>
        <li style="display:inline; margin-right:5%;">
          <router-link to="#"> Home </router-link>
        </li>
        <li style="display:inline; margin-right:5%">
          <router-link to="/"> Todos </router-link>
        </li>

        <li style="display:inline;  margin-right:5%">
          <router-link to="/register">Register </router-link>
        </li>

        <li style="display:inline">
          <router-link to="/login"> Login </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "Navbar",
  data: function() {
    return {
      links: {
        login: "/login",
        todos: "/"
      }
    };
  }
};
</script>
