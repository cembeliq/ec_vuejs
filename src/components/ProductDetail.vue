<template>
  <!-- <div id="container">
    <h2> Nama Produk : {{ product.name}} </h2>
  </div>-->
  <!-- ============================ COMPONENT 1 ================================= -->

  <div class="card">
    <div class="row no-gutters">
      <aside class="col-md-6">
        <article class="gallery-wrap">
          <div class="img-big-wrap">
            <div id="main_image_id">
              
            </div>
          </div>
          <!-- slider-product.// -->
          <div class="thumbs-wrap"  >
            
            <a href="#" class="item-thumb" v-for="(image, index) in product.images"
            :key="image.id">
              <img :src=src[index] :alt=image.alt @click="imgToMain(src[index])"/>
            </a>
            <!-- <a href="#" class="item-thumb">
              <img src="images/items/2.jpg" />
            </a>
            <a href="#" class="item-thumb">
              <img src="images/items/3.jpg" />
            </a>
            <a href="#" class="item-thumb">
              <img src="images/items/4.jpg" />
            </a> -->
          </div>
          <!-- slider-nav.// -->
        </article>
        <!-- gallery-wrap .end// -->
      </aside>
      <main class="col-md-6 border-left">
        <article class="content-body">
          <h2 class="title">{{ product.name }}</h2>

          <div class="rating-wrap my-3">
            <ul class="rating-stars">
              <li :style="width" class="stars-active">
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
            <small class="label-rating text-muted">{{ product.rating }} reviews</small>
            <small class="label-rating text-success">
              <!-- <i class="fa fa-clipboard-check"></i> 154 orders -->
            </small>
          </div>
          <!-- rating-wrap.// -->

          <div class="mb-3">
            <var class="price h4">{{ formatPrice(product.price) }}</var>
            <span class="text-muted"></span>
          </div>
          <!-- price-detail-wrap .// -->

          <!-- <p>{{ product.desc }}</p> -->
          

          <dl class="row">
            <dt class="col-sm-3">Kondisi</dt>
            <dd v-if="product.is_second" class="col-sm-9">Bekas</dd>
            <dd v-else class="col-sm-9">Baru</dd>

            <dt class="col-sm-3">Pengiriman dari</dt>
            <dd class="col-sm-9">{{ deliver }}</dd>

            <!-- <dt class="col-sm-3">Terima COD</dt>
            <dd class="col-sm-9">Ya</dd> -->
          </dl>

          <hr />
          <input type="hidden" id="p_id" :val="product.id" />
          <div class="form-row">
            <div class="form-group col-md">
              <label>Quantity {{ product.qty }}</label>
              <div class="input-group mb-3 input-spinner">
                <div class="input-group-prepend">
                  <button v-on:click="counterQtyPlus(product.qty)" class="btn btn-light" type="button" id="btn_plus">+</button>
                </div>
                <input type="number" class="form-control" id="positive_number" value="1" min="0" max="1" />
                <div class="input-group-append">
                  <button v-on:click="counterQtyMin(1)" class="btn btn-light" type="button" id="btn_minus">&minus;</button>
                  
                </div>
                <!-- <span class="text">Tersisa </span> -->
              </div>
            </div>
            <!-- col.// -->
            <div class="form-group col-md">
              <!-- <label>Select size</label>
              <div class="mt-1">
                <label class="custom-control custom-radio custom-control-inline">
                  <input type="radio" name="select_size" checked class="custom-control-input" />
                  <div class="custom-control-label">Small</div>
                </label>

                <label class="custom-control custom-radio custom-control-inline">
                  <input type="radio" name="select_size" class="custom-control-input" />
                  <div class="custom-control-label">Medium</div>
                </label>

                <label class="custom-control custom-radio custom-control-inline">
                  <input type="radio" name="select_size" class="custom-control-input" />
                  <div class="custom-control-label">Large</div>
                </label>
              </div>-->
            </div>
            <!-- col.// -->
          </div>
          <!-- row.// -->
          <div v-if="!currentUser">
          <router-link :to="{ name: 'signin', params: { id: 0 } }">
            <button @click="createOrder" class="btn btn-primary">Beli <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
          </router-link>
          &nbsp;

          <!-- <a :href="urlshopee" class="btn btn-primary" target="_blank">Buy in shopee</a> -->
          <a :href="urlwa" class="btn btn-outline-primary" target="_blank">
            <span class="text">Chat WA</span>
            <i class="fa fa-whatsapp fa_custom_wa" aria-hidden="true"></i>
          </a>
          </div>
          <div v-else>
            <router-link :to="{ name: 'cart', params: { id: 0 } }">
            <button @click="createOrder" class="btn btn-primary">Beli <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
          </router-link>
          &nbsp;

          <!-- <a :href="urlshopee" class="btn btn-primary" target="_blank">Buy in shopee</a> -->
          <a :href="urlwa" class="btn btn-outline-primary" target="_blank">
            <span class="text">Chat WA</span>
            <i class="fa fa-whatsapp fa_custom_wa" aria-hidden="true"></i>
          </a>
          </div>
          
          
          <!-- <router-link :to="{ name: 'cart', params: { id: 0 } }">
            <button class="btn  btn-outline-primary">Buy <i class="fa fa-shopping-cart fa_custom_cart" aria-hidden="true"></i></button>
          </router-link> -->
        </article>
        <!-- product-info-aside .// -->
      </main>
      <!-- col.// -->
    </div>
    <!-- row.// -->
  </div>
  <!-- card.// -->
  <!-- ============================ COMPONENT 1 END .// ================================= -->
  
</template>

<script>
import Order from "../models/order";
import ProductDataService from "../services/ProductPopulerDataService";
import OrderDataService from "../services/OrderDataService";

export default {
  name: "detail-product",
  data() {
    return {
      order: new Order("","",""),
      product: [],
      message: "",
      urlwa: "",
      urlshopee: "",
      width: "",
      counter: 1,
      mainImage: null,
      deliver: '',
      productId: null
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    createOrder(){
      // console.log(this.currentUser.id);
      this.order.product_id = this.productId;
      if (this.currentUser){
        this.order.user_id = this.currentUser.id;
      }
      
      let dataAc = $('#positive_number').val();
      this.order.qty = dataAc;
      OrderDataService.create(this.order)
        .catch(e => {
          console.log(e);
          alert("silakan login terlebih dahulu");
        })
    },
    getProduct(id) {
      let baseId = id.split(process.env.VUE_APP_PREFIX_SLUG); //id.substring(id.indexOf("-") + 1);
    
      let x = Buffer.from(baseId[1], 'base64')
      let realId = x.toString();
      ProductDataService.get(realId)
        .then(response => {
          this.product = response.data;
          this.width = "width: " + (this.product.rating / 5) * 100 + "%";
          this.productId = this.product.id;
          let newTitle =
            process.env.VUE_APP_PREFIX_META_TITLE + this.product.name;
          if (document.title != newTitle) {
            document.title = newTitle;
          }

          this.deliver = this.product.users.districts.cities.name;
          let newDescription = this.product.desc;
          $('meta[name="description"]').attr("content", newDescription);
          let name = this.product.name;
          let slug =
            name.replace(/ /g, "-").toLowerCase() +
            process.env.VUE_APP_PREFIX_SLUG +
            btoa(this.product.id);
          this.urlwa =
            "https://api.whatsapp.com/send?phone=+628111070114&text="+ process.env.VUE_APP_GREETING +" http://"+ window.location.host + "/" + slug;
          this.urlshopee = "https://shopee.co.id/cembeliq86/" + slug;

          $('#desc').html(this.product.desc);
          let content = '';
          if (this.product.images.length > 0){
            this.mainImage = `${process.env.VUE_APP_URL_API_IMAGE}${this.product.images[0].name}`;
            this.src = this.product.images.map(function(item){
              return `${process.env.VUE_APP_URL_API_IMAGE}${item.name}`;
            });

            content = `<a href='${process.env.VUE_APP_URL_API_IMAGE}${this.product.images[0].name}'><img src='${process.env.VUE_APP_URL_API_IMAGE}${this.product.images[0].name}' /></a>`;
          }
          else {
            this.mainImage = process.env.VUE_APP_URL_API_IMAGE + 'default.png';
            this.src = process.env.VUE_APP_URL_API_IMAGE + 'default.png';
            content = `<a href='${process.env.VUE_APP_URL_API_IMAGE}default.png'><img src='${process.env.VUE_APP_URL_API_IMAGE}default.png' /></a>`;
          }
          // alert(content);
          $('#main_image_id').html(content);

        })
        .catch(e => {
          console.log(e);
        });
    },
    counterQtyPlus: function(qty){
      if (this.counter >= qty){
        $("#positive_number").val(qty);
      } else{
        this.counter += 1;
        $("#positive_number").val(this.counter);
      }
    },
    counterQtyMin: function(qty){
      if (this.counter <= qty){
        $("#positive_number").val("1");
      } else{
        this.counter -= 1;
        $("#positive_number").val(this.counter);
      }
    },
    imgToMain: function(img){
      let content = `<a href=${img}><img src=${img} /></a>`;
      // alert(content);
      $('#main_image_id').html(content);
    }
  },
  mounted() {
    this.message = "";
    this.getProduct(this.$route.params.id);

  }
};
</script>

<style scoped>
    .fa_custom_wa {  
			color: #33FF74  
		}  
		.fa_custom_cart {  
			color: #ffcc00  
		}  
</style>
