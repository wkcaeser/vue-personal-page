<template>
  <ul class="list-group menu-sty">
    <li class="list-group-item" @click="toPath('/blog')">
      个人博客
    </li>
    <router-link to="/github">
      <li class="list-group-item">
        github
      </li>
    </router-link>
    <!--<router-link to="/jetbrains-register">-->
      <li class="list-group-item" @click="toPath('/jetbrains-register')">
        jetBrains Register
      </li>
    <!--</router-link>-->
  </ul>
</template>

<script>
  export default {
    name: "menu-navigation",
    methods: {

    }
  }
</script>

<style scoped>
  li:hover {
    background-color: green;
  }

  .menu-sty {
    margin-top: 2%;
    margin-left: -6%;
    margin-right: 34%;
  }
</style>
