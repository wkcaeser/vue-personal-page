<template>
<div class="container-fluid">
  <div class="row"><br/></div>
  <div class="row">
    <div class="col-md-6">
      <img :src="imgMe" class="rounded-circle" style="width: 80px; height: 80px">
      <h3>wkCaeser</h3>
    </div>
    <div class="col-md-3">

    </div>
    <div class="col-md-3"></div>
  </div>
</div>
</template>

<script>
    export default {
        name: "person-info",
      data(){
          return {
            imgMe: require("../assets/me.jpeg")
          }
      }
    }
</script>

<style scoped>

</style>
