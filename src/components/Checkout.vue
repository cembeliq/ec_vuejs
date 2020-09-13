<template>
  <section class="section-content bg padding-y">
    <div class="container">
      <header class="section-heading">
        <h2 class="section-title">Checkout</h2>
      </header>
      <!-- sect-heading -->

      <div class="card">
        <article class="card-body">
          <header class="mb-4">
            <h4 class="card-title">Alamat Pengiriman</h4>
          </header>
          <p>{{ address }}</p>
          <button class="btn btn-primary rounded-pill">Ubah Alamat</button>
        </article>
      </div>

      <br />

      <div class="card mb-3">
        <article class="card-body">
          <header class="mb-4">
            <h4 class="card-title">Review cart</h4>
          </header>
          <div class="row">
            <!-- col.// -->
            <div class="col-md-6" v-for="(order,index) in orders" :key="order.id">
              <figure class="itemside mb-3">
                <div class="aside">
                  <img :src="image[index]" class="border img-xs" />
                </div>
                <figcaption class="info">
                  <p>{{order.product.name}}</p>
                  <span>{{order.qty}} x {{formatPrice(order.product.price)}} = {{total[index]}}</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <!-- row.// -->
        </article>
        <!-- card-body.// -->
        <article class="card-body border-top">
          <dl class="row">
            <dt class="col-sm-9">
              Subtotal:
              <span class="float-right text-muted">{{orders.length}} items</span>
            </dt>
            <dd class="col-sm-3 text-right">
              <strong>{{formatPrice(totalAll())}}</strong>
            </dd>

            <dt class="col-sm-9">
              Discount:
              <span class="float-right text-muted">No discount</span>
            </dt>
            <dd class="col-sm-3 text-danger text-right">
              <strong>0</strong>
            </dd>

            <dt class="col-sm-9">
              Ongkos kirim:
              <span class="float-right text-muted">Express delivery</span>
            </dt>
            <dd class="col-sm-3 text-right">
              <strong>0</strong>
            </dd>

            <!-- <dt class="col-sm-9">
              Tax:
              <span class="float-right text-muted">5%</span>
            </dt>
            <dd class="col-sm-3 text-right text-success">
              <strong>$7</strong>
            </dd>-->

            <dt class="col-sm-9">Total:</dt>
            <dd class="col-sm-3 text-right">
              <strong class="h5 text-dark">{{formatPrice(totalAll())}}</strong>
            </dd>
          </dl>
        </article>
        <!-- card-body.// -->
      </div>
      <!-- card.// -->
      <!-- <br> -->
      <!-- <div class="card">
        <article class="card-body">
          <header class="mb-4">
            <h4 class="card-title">Pembayaran</h4>
          </header>
          <p>Silakan transfer ke rekening berikut: <br>
            Nama Bank: Mandiri <br>
            No Rekening: 1310004309797 <br>
            Atas Nama: Setyo Agung Nugroho 
          </p>
          
        </article>
      </div>-->
      <br />
      <!-- <div>
        <button @click="wa()" class="col-sm-12 btn btn-primary rounded-pill">Pilih Pembayaran</button>
      </div>-->
      <div>
        <b-button v-b-modal.my-modal class="col-sm-12 btn btn-primary rounded-pill">Pilih Pembayaran</b-button>
        <!-- The modal -->
        <b-modal id="my-modal" title="Pilih Pembayaran" hide-footer>
          Hello From My Modal!
          <div>
            <b-form-group label="Individual radios">
              <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio>
              <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>
            </b-form-group>

            <div class="mt-3">
              Selected:
              <strong>{{ selected }}</strong>
            </div>
          </div>
        </b-modal>
      </div>
    </div>
    <!-- container .//  -->
  </section>
</template>

<script>
import UserProfileDataService from "../services/UserProfileDataService";
import OrderDataService from "../services/OrderDataService";

export default {
  name: "checkout",
  data() {
    return {
      user: [],
      address: "",
      orders: [],
      image: "",
      total: 0,
      selected: ''
    };
  },
  // computed: {
  //   currentUser() {
  //     console.log(this.$store.state.auth.user);
  //     return this.$store.state.auth.user;
  //   },
  // },
  methods: {
    getUser(id) {
      UserProfileDataService.get(id)
        .then((res) => {
          this.user = res.data;
          this.address =
            this.user.address +
            " " +
            this.user.districts.name +
            ", " +
            this.user.districts.cities.name +
            ", " +
            this.user.districts.cities.provinces.name;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getOrder(id) {
      // this.data.id = this.$store.state.auth.user.id;
      // console.log(this.data);
      OrderDataService.get(id)
        .then((response) => {
          this.orders = response.data;
          console.log(this.orders);
          this.image = this.orders.map((item) => {
            if (item.product.images.length > 0) {
              return (
                process.env.VUE_APP_URL_API_IMAGE + item.product.images[0].name
              );
            } else {
              return process.env.VUE_APP_URL_API_IMAGE + "default.png";
            }
          });
          this.total = this.orders.map((item) => {
            return this.formatPrice(item.qty * item.product.price);
          });
          // this.positive_numberx = this.orders.map((item) => {
          //   return `positive_number_${item.id}`;
          // });
          // this.price_numberx = this.orders.map((item) => {
          //   return `txt_price_${item.id}`;
          // });
          // this.num = this.orders.map(function (item) {

          //   let content = `<input type="number" name="num[]" value="${item.qty}" />`
          //   console.log(content);
          //   $('#sum').html(content);
          // });
        })
        .catch((e) => {
          console.log(e);
          // alert("Silakan login terlebih dahulu");
          // this.$router.push({ path: "/signin" });
        });
    },
    totalAll: function () {
      let total = [];
      Object.entries(this.orders).forEach(([, val]) => {
        total.push(val.product.price * val.qty);
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    wa: function () {
      window.open("https://api.whatsapp.com/send?phone=+628111070114&text=");
    },
  },
  mounted() {
    this.getUser(this.$store.state.auth.user.id);
    this.getOrder(this.$store.state.auth.user.id);
  },
};
</script>