<template>
  <!-- ========================= SECTION  ========================= -->
  <section class="section-name padding-y">
    <div class="container" style="text-align: center;">
      <h3 class="mb-3">Download app</h3>

      <a href="#">
        <img :src=appstore height="40" />
      </a>
      <a href="#">
        <img :src=playmarket height="40" />
      </a>
    </div>
    <!-- container // -->
  </section>
  <!-- ========================= SECTION  END// ======================= -->
</template>

<script>
export default {
  name: 'my-component',
    data () {
      return {
        appstore : process.env.VUE_APP_URL_ROOT+"images/misc/appstore.png",
        playmarket : process.env.VUE_APP_URL_ROOT+"images/misc/playmarket.png"
      }
    }
}
</script>