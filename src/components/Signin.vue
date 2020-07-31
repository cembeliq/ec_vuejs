<template>
  <div id="app">
    
    <!-- section-header.// -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Header />
    <Search />
    <Signin />
    <Footer />

    <!-- <div class="cart">
      <router-view />
    </div> -->
  </div>
</template>

<script>
import Header from "./home/Header";
import Search from "./home/Search.vue";
import Footer from "./home/Footer2.vue";
import Signin from "./home/Signin.vue";

export default {
  name: "app",
  components: {
    Signin,
    Search,
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
