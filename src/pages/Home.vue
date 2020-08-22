<template>
<div id="app">
    <ProductPopuler />
    
</div>

</template>

<script>
// // import HelloWorld from './HelloWorld.vue'
// import Header from "../components/home/Header";
// import Category from "../components/home/Category.vue";
// import Search from "../components/home/Search.vue";
// import Banner from "./home/Banner.vue";
// import Feature from "./home/Feature.vue";
import ProductPopuler from "../components/ProductPopuler.vue";
// import ProductNew from "./home/ProductNew.vue";
// import ProductRecommended from "./home/ProductRecommended.vue";
// import Brand from "../components/home/Brand.vue";
// import AppDownload from "../components/home/AppDownload.vue";
// import Footer from "../components/home/Footer.vue";

export default {
  name: "app",
  components: {
    // Category,
    // // HelloWorld,
    // Search,
    // Header,
    // Banner,
    // Feature,
    ProductPopuler,
    // ProductNew,
    // ProductRecommended,
    // Brand,
    // AppDownload,
    // Footer,
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
