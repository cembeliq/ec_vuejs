<template>
  <div id="app">
    
    <ProductDetail />
    <ProductDetailTab />

  
  </div>
</template>

<script>

import ProductDetail from "../components/ProductDetail.vue";
import ProductDetailTab from "../components/ProductDetailTab.vue";

export default {
  name: "app",
  components: {
    ProductDetail,
    ProductDetailTab
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
