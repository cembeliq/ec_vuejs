<template>
  <!-- ========================= SECTION CONTENT ========================= -->
  <section class="section-content">
    <div class="container">
      <header class="section-heading">
        <!-- <h3 class="section-title">Popular products</h3> -->
        <h3 class="section-title">Produk</h3>
      </header>
      <!-- sect-heading -->

      <div class="row">
        <div class="col-md-3" v-if="products.length == 0">
          <p>{{ empty }}</p>
        </div>
        <div class="col-md-3" v-for="(product, index) in products" :key="product.id">
          <router-link :to="{ name: 'product_detail', params: { id: slug[index] } }">
            <div class="card card-product-grid">
              <div class="img-wrap">
                <img :src="src[index]" />
              </div>

              <!-- <a href="#" class="img-wrap">
              <img :src="src[index]" />
              </a>-->
              <figcaption class="info-wrap">
                {{ product.name }}
                <div class="rating-wrap">
                  <ul class="rating-stars">
                    <li :style="width[index]" class="stars-active">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <span class="label-rating text-muted">34 reviws</span>
                </div>
                <div class="price mt-1">{{ formatPrice(product.price) }}</div>
                <br />
                <!-- <div class="row">
              <div class="col-md-6">
              <a :href=urlwa+product.name>
<img src="https://web.whatsapp.com/img/favicon/2x/favicon.png"></a>
              </div>
              <div class="col-md-6">
              <a :href=urlshopee+slug[index]>
<img src="../../assets/images/shopee.png" style="width: 35px"></a>
              </div>
                </div>-->
                <!-- price-wrap.// -->
              </figcaption>
            </div>
          </router-link>
        </div>
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </div>
    <!-- container .//  -->
  </section>
  <!-- ========================= SECTION CONTENT END// ========================= -->
</template>

<script>
import ProductPopulerDataService from "../services/ProductPopulerDataService";

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
    };
  },
  methods: {
    retrieveProduct(categoryName) {
      ProductPopulerDataService.getAll(categoryName)
        .then((res) => {
          this.products = res.data;
          if (res.data.length == 0) {
            this.empty = "Produk tidak ditemukan.";
          }
          this.width = this.products.map(function (item) {
            let x = (item.rating / 5) * 100;

            return `width: ${x}%`;
          });
          this.src = this.products.map(function (item) {
            if (item.images.length > 0){
              return process.env.VUE_APP_URL_API_IMAGE + item.images[0].name;
            }
            else {
              return process.env.VUE_APP_URL_API_IMAGE + 'default.png';
            }
            
          });
          this.slug = this.products.map(function (item) {
            let text = item.name;
            return (
              text.replace(/ /g, "-").toLowerCase() +
              process.env.VUE_APP_PREFIX_SLUG +
              btoa(item.id)
            );
          });
          this.urlwa =
            "https://api.whatsapp.com/send?phone=+628111070114&text=";
          this.urlshopee = "https://shopee.co.id/cembeliq86/";
        })
        .catch((err) => {
          console.log(err);
        });
      // }
    },
  },
  mounted() {
    this.retrieveProduct(this.$route.params.categoryName);
  },
};
</script>