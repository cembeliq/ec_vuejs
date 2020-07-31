<template>
  <!-- <div class="card">
    <div class="row">
      <main class="col-md-12 border-left">
        <article class="content-body">
          <b-card no-body>
            <b-tabs card>
              <b-tab title="Deskripsi" active>
                <b-card-text>
                  <div id="desc"></div>
                </b-card-text>
              </b-tab>
              <b-tab title="Ulasan">
                <b-card-text>Belum ada ulasan.</b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </article>
      </main>
    </div>
  </div> -->
  <div>
  <b-tabs content-class="ml-4 mt-3 mb-3" fill>
    <b-tab title="Deskripsi" active><div id="desc"></div></b-tab>
    <b-tab title="Ulasan"><p>Belum ada ulasan</p></b-tab>
    <b-tab title="Pertanyaan"><p>Untuk pertanyaan silakan langsung chat via whatsapp</p></b-tab>
  </b-tabs>
  </div>
</template>

<script>
import ProductDataService from "../../services/ProductPopulerDataService";

export default {
  name: "detail-product",
  data() {
    return {
      product: [],
      message: "",
      urlwa: "",
      urlshopee: "",
      width: "",
      counter: 1
    };
  },
  methods: {
    getProduct(id) {
      ProductDataService.get(id)
        .then(response => {
          this.product = response.data;
          this.width = "width: " + (this.product.rating / 5) * 100 + "%";

          let newTitle =
            process.env.VUE_APP_PREFIX_META_TITLE + this.product.name;
          if (document.title != newTitle) {
            document.title = newTitle;
          }

          let newDescription = this.product.desc;
          $('meta[name="description"]').attr("content", newDescription);
          let name = this.product.name;
          let slug =
            name.replace(/ /g, "-").toLowerCase() +
            process.env.VUE_APP_PREFIX_SLUG +
            btoa(this.product.id);
          this.urlwa =
            "https://api.whatsapp.com/send?phone=+628111070114&text=" + slug;
          this.urlshopee = "https://shopee.co.id/cembeliq86/" + slug;

          $("#desc").html(this.product.desc);
        })
        .catch(e => {
          console.log(e);
        });
    },
    counterQtyPlus: function(qty) {
      if (this.counter >= qty) {
        $("#positive_number").val(qty);
      } else {
        this.counter += 1;
        $("#positive_number").val(this.counter);
      }
    },
    counterQtyMin: function(qty) {
      if (this.counter <= qty) {
        $("#positive_number").val("1");
      } else {
        this.counter -= 1;
        $("#positive_number").val(this.counter);
      }
    }
  },
  mounted() {
    this.message = "";
    this.getProduct(this.$route.params.id);
  }
};
</script>