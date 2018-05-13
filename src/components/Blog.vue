<template>
  <div class="align-content-center" style="margin: 20%; background-color: aqua">
    <div class="align-content-center">
      <p>博客地址
        <!--<button type="button" class="close" aria-hidden="true" @click="jump">-->
        <button type="button" class="close" aria-hidden="true" @click="toPath('/')">
          &times;
        </button>
        <br/>
        https://blog.csdn.net/qq_36666651?ref=toolbar
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "blog",
    methods: {
      jump: function () {
        this.toPath("/");
      }
    }
  }
</script>

<style scoped>

</style>
