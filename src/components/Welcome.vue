<template>
  <!-- ========================= SECTION CONTENT ========================= -->
  <section class="section-content">
    <div class="container">
      <header class="section-heading">
        <!-- <h3 class="section-title">Popular products</h3> -->
        <h3 class="section-title">{{welcome}}</h3>
      </header>
      <!-- sect-heading -->

      <div class="row">
        
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </div>
    <!-- container .//  -->
  </section>
  <!-- ========================= SECTION CONTENT END// ========================= -->
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
  name: "populer-product",
  data() {
    return {
      products: [],
      width: null,
      url: null,
      productDetail: null,
      src: null,
      empty: "",
      welcome: ""
    };
  },
  methods: {
    retrieveUser(){
      UserDataService.get()
        .then(res => {
          console.log(res.data);
          if (res.data != "undefined"){
            this.welcome = res.data.message;
          }
          
        })
        .catch((err) => {
          console.log(err);
        })
    },
  },
  mounted() {
    this.retrieveUser();
  },
};
</script>