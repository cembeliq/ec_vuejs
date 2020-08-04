<template>
  <div id="app">
    
    <!-- section-header.// -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Header />
    <Search />
    <Category />
    <Banner />
    <!-- <Feature /> -->
    <ProductPopuler />
    <!-- <ProductNew />
    <ProductRecommended /> -->
    <Brand />
    <AppDownload />
    <Footer />

    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">cembeliq</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/tutorials" class="nav-link">Tutorials</a>
        </li>
        <li class="navbar-item">
          <a href="/add" class="nav-link">Add</a>
        </li>
      </div>
    </nav> -->
    <div class="detail-product">
      <router-view />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './HelloWorld.vue'
import Header from "./home/Header";
import Category from "./home/Category.vue";
import Search from "./home/Search.vue";
import Banner from "./home/Banner.vue";
// import Feature from "./home/Feature.vue";
import ProductPopuler from "./home/ProductPopuler.vue";
// import ProductNew from "./home/ProductNew.vue";
// import ProductRecommended from "./home/ProductRecommended.vue";
import Brand from "./home/Brand.vue";
import AppDownload from "./home/AppDownload.vue";
import Footer from "./home/Footer.vue";

export default {
  name: "app",
  components: {
    Category,
    // HelloWorld,
    Search,
    Header,
    Banner,
    // Feature,
    ProductPopuler,
    // ProductNew,
    // ProductRecommended,
    Brand,
    AppDownload,
    Footer,
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
