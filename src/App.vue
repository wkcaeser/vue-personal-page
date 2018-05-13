<template>
  <div id="app"
       :style="{background:url_back_img+'no-repeat fixed ',backgroundSize:'cover'}">
    <div class="container">
      <!--style="position: fixed">-->
      <div id="header" class="row">
        <h1 class="box">wkCaeser 的 个人空间</h1>
      </div>
      <div class="row">
        <div class="col-md-4" :style='{height:cli_height + "px"}'>
          <person-info/>
          <menu-navigation/>
        </div>
        <div class="col-md-1" :style='{height:cli_height + "px"}'></div>
        <div class="col-md-7" :style='{height:cli_height + "px"}'>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import PersonInfo from "./components/PersonInfo";
  import MenuNavigation from "./components/MenuNavigation";

  export default {
    components: {PersonInfo, MenuNavigation},
    name: 'App',
    mounted: function() {
      this.cli_height = this.cli_height - this.element_height("header");
    },
    methods: {
      element_height: function (id) {
        return document.getElementById(id).clientHeight
      }
    },
    data() {
      return {
        cli_height: document.documentElement.clientHeight,
        body_height: document.body.clientHeight,
        cli_wight: document.documentElement.clientWidth,
        back_img: require('./assets/logo.png'),
        url_back_img: "url(" + require('./assets/flower.jpg') + ")"
      }
    }
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .fill {
    margin: 0;
    padding: 0;
  }

  .box {
    animation: change 1s ease-in infinite;
    font-size: 36px;
    color: #2c3e50;
    font-weight: bold;
    margin-top: 12px
  }

  @keyframes change {
    0% {
      text-shadow: 0 0 4px;
      opacity: 1;
    }
    50% {
      text-shadow: 0 0 40px;
      opacity: 0.5;
    }
    100% {
      text-shadow: 0 0 4px;
      opacity: 1;
    }
  }
</style>
