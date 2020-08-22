<template>
  <div id="app">
    
      <Header />
      <div class="product">
      <router-view />
    </div>
    </div >
  
</template>

<script>
import Header from "../components/Header";

export default {
  name: "app",
  components: {
    
    Header,
    // Banner,
    // Feature,
    // ProductPopuler,
    // ProductNew,
    // ProductRecommended,
    
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
