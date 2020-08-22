<template>
  <!-- ========================= SECTION  ========================= -->
  <section class="section-name bg padding-y-sm">
    <div class="container">
      <header class="section-heading">
        <!-- <h3 class="section-title">Our Brands</h3> -->
        <h3 class="section-title">Brand</h3>
      </header>
      <!-- sect-heading -->

      <div class="row">
        <div class="col-md-2 col-6">
          <figure class="box item-logo">
            <a href="#">
              <img :src=logo1 />
            </a>
            <!-- <figcaption class="border-top pt-2">36 Products</figcaption> -->
          </figure>
          <!-- item-logo.// -->
        </div>
        <!-- col.// -->
        <div class="col-md-2 col-6">
          <figure class="box item-logo">
            <a href="#">
              <img :src=logo2 />
            </a>
            <!-- <figcaption class="border-top pt-2">980 Products</figcaption> -->
          </figure>
          <!-- item-logo.// -->
        </div>
        <!-- col.// -->
        <div class="col-md-2 col-6">
          <figure class="box item-logo">
            <a href="#">
              <img :src=logo3 />
            </a>
            <!-- <figcaption class="border-top pt-2">25 Products</figcaption> -->
          </figure>
          <!-- item-logo.// -->
        </div>
        <!-- col.// -->
        <div class="col-md-2 col-6">
          <figure class="box item-logo">
            <a href="#">
              <img :src=logo4 />
            </a>
            <!-- <figcaption class="border-top pt-2">72 Products</figcaption> -->
          </figure>
          <!-- item-logo.// -->
        </div>
        <!-- col.// -->
        <div class="col-md-2 col-6">
          <figure class="box item-logo">
            <a href="#">
              <img :src=logo5 />
            </a>
            <!-- <figcaption class="border-top pt-2">41 Products</figcaption> -->
          </figure>
          <!-- item-logo.// -->
        </div>
        <!-- col.// -->
        <div class="col-md-2 col-6">
          <figure class="box item-logo">
            <a href="#">
              <img :src=logo1 />
            </a>
            <!-- <figcaption class="border-top pt-2">12 Products</figcaption> -->
          </figure>
          <!-- item-logo.// -->
        </div>
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </div>
    <!-- container // -->
  </section>
  <!-- ========================= SECTION  END// ========================= -->
</template>

<script>
export default {
  name: 'my-component',
    data () {
      return {
        logo1 : process.env.VUE_APP_URL_ROOT+"images/logos/logo1.png",
        logo2 : process.env.VUE_APP_URL_ROOT+"images/logos/logo2.png",
        logo3 : process.env.VUE_APP_URL_ROOT+"images/logos/logo3.png",
        logo4 : process.env.VUE_APP_URL_ROOT+"images/logos/logo4.png",
        logo5 : process.env.VUE_APP_URL_ROOT+"images/logos/logo5.png",

      }
    }
}
</script>