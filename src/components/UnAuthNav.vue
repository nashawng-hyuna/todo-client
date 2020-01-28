<template>
  <div>
    <nav style="background-color:green; padding:1%">
      <ul>
        <li style="display:inline; margin-right:5%;">
          <router-link to="/welcome"> Home </router-link>
        </li>

        <li style="display:inline; margin-right:5%">
          <router-link to="/login"> Login </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "UnAuthNav"
};
</script>

<style scoped></style>
