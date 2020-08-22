<template>
  <div id="app">
    <Header />
    <Search />
    <Category />
    <!-- <Banner /> -->
    <!-- <Feature /> -->
    <div class="product">
      <router-view />
    </div>
    <!-- <ProductNew />
    <ProductRecommended /> -->
    <Brand />
    <AppDownload />
    <Footer />

    
  </div>
</template>

<script>
// import HelloWorld from './HelloWorld.vue'
import Header from "../components/Header";
import Category from "../components/Category.vue";
import Search from "../components/Search.vue";
// import Banner from "./Banner.vue";
// import Feature from "./Feature.vue";
// import ProductPopuler from "../components/ProductPopuler.vue";
// import ProductNew from "./ProductNew.vue";
// import ProductRecommended from "./ProductRecommended.vue";
import Brand from "../components/Brand.vue";
import AppDownload from "../components/AppDownload.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "app",
  components: {
    Category,
    // HelloWorld,
    Search,
    Header,
    // Banner,
    // Feature,
    // ProductPopuler,
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
