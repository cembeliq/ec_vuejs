<template>
  <div id="app">
    
    <!-- section-header.// -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Header />
    <Search />
    <Cart />
    <Footer />

    <!-- <div class="cart">
      <router-view />
    </div> -->
  </div>
</template>

<script>
import Header from "../components/Header";
import Search from "../components/Search.vue";
import Footer from "../components/Footer.vue";
import Cart from "../components/Cart.vue";

export default {
  name: "app",
  components: {
    Cart,
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
