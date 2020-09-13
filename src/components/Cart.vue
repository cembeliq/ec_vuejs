<template>
  <section class="section-content padding-y bg">
    <div class="container">
      <!-- ============================ COMPONENT 1 ================================= -->

      <div class="row">
        <aside class="col-lg-9">
          <div class="card table-responsive">
            <table class="table table-borderless table-shopping-cart">
              <thead class="text-muted">
                <tr class="small text-uppercase">
                  <th scope="col">Product</th>
                  <th scope="col" width="200">Quantity</th>
                  <th scope="col" width="120">Price</th>
                  <th scope="col" class="text-right" width="200"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(order,index) in orders" :key="order.id">
                  <td>
                    <figure class="itemside align-items-center">
                      <div class="aside">
                        <img src="images/items/1.jpg" class="img-sm" />
                      </div>
                      <figcaption class="info">
                        <a href="#" class="title text-dark">{{order.product.name}}</a>
                        <p class="text-muted small" v-if="order.product.is_second == 0">
                          Produk: Baru
                          <br />Pengiriman dari: {{order.user.districts.cities.name}}
                        </p>
                        <p class="text-muted small" v-else>
                          Produk: Bekas
                          <br />Pengiriman dari: {{order.user.districts.cities.name}}
                        </p>
                      </figcaption>
                    </figure>
                  </td>
                  <td>
                    <div class="input-group mb-3 input-spinner">
                      <div class="input-group-prepend">
                        <button
                          v-on:click="counterQtyPlus(order.product.qty, order.id, order.product.price)"
                          class="btn btn-light"
                          type="button"
                          id="btn_plus"
                        >+</button>
                      </div>
                      <input
                        type="number"
                        class="form-control"
                        :id="positive_numberx[index]"
                        v-model=order.qty
                        min="0"
                        max="1"
                        
                      />
                      <div class="input-group-append">
                        <button
                          v-on:click="counterQtyMin(1, order.id, order.product.price)"
                          class="btn btn-light"
                          type="button"
                          id="btn_minus"
                        >&minus;</button>
                      </div>
                      <!-- <span class="text">Tersisa </span> -->
                    </div>
                    <!-- <select class="form-control" v-if="order.product.qty">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select> -->
                  </td>
                  <td>
                    <div class="price-wrap">
                      <var class="price" :id="price_numberx[index]" name="price2">{{formatPrice(order.product.price*order.qty)}}</var>
                      <small class="text-muted">{{formatPrice(order.product.price)}} per item</small>
                    </div>
                    <!-- price-wrap .// -->
                  </td>
                  <td class="text-right">
                    <!-- <a
                      data-original-title="Save to Wishlist"
                      title
                      href
                      class="btn btn-light"
                      data-toggle="tooltip"
                    >
                      <i class="fa fa-heart"></i>
                    </a> -->
                    <div class="col-md-2">
                    <button @click="deleteItem(order.id)" class="btn btn-light">Remove</button>
                    </div>
                  </td>
                </tr>
                
              </tbody>
            </table>

            <div class="card-body border-top">
              <p class="icontext">
                <i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks
              </p>
            </div>
            <!-- card-body.// -->
          </div>
          <!-- card.// -->
        </aside>
        <!-- col.// -->
        <aside class="col-lg-3">
          <div class="card mb-3">
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label>Have coupon?</label>
                  <div class="input-group">
                    <input type="text" class="form-control" name placeholder="Coupon code" />
                    <span class="input-group-append">
                      <button class="btn btn-primary">Apply</button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <!-- card-body.// -->
          </div>
          <!-- card.// -->

          <div class="card">
            <div class="card-body">
              <dl class="dlist-align">
                <dt>Total price:</dt>
                <dd class="text-right" id="totalPrice">{{formatPrice(total())}}</dd>
              </dl>
              <dl class="dlist-align">
                <dt>Discount:</dt>
                <dd class="text-right text-danger">- {{formatPrice(0)}}</dd>
              </dl>
              <dl class="dlist-align">
                <dt>Total:</dt>
                <dd class="text-right text-dark b">
                  <strong id="totalPriceNett">{{formatPrice(total())}}</strong>
                </dd>
              </dl>
              <hr />
              <p class="text-center mb-3">
                <img src="images/misc/payments.png" height="26" />
              </p>
              <button @click="purchase()" class="btn btn-primary btn-block">Make Purchase</button>
              <a href="#" class="btn btn-light btn-block">Continue Shopping</a>
            </div>
            <!-- card-body.// -->
          </div>
          <!-- card.// -->
        </aside>
        <!-- col.// -->
      </div>
      <!-- row.// -->
      <!-- ============================ COMPONENT 1 END .// ================================= -->

      <br />

      
      <!-- row.// -->
    </div>
    <!-- container .//  -->
  </section>
  <!-- ========================= SECTION CONTENT END// ========================= -->
</template>

<script>
import OrderDataService from "../services/OrderDataService";

// var totalPrice = 0;

export default {
  name: "cart",
  data() {
    return {
      orders: [],
      // data: new Object(),//{ data: {user_id: this.$store.state.auth.user.id}},
      message: "",
      num: 0,
      positive_numberx: 0,
      price_numberx: 0,
      // totalPrice: 0,
      // urlwa: "",
      // urlshopee: "",
      // width: "",
      // counter: 1,
      // mainImage: null
    };
  },
  methods: {
    deleteItem(id) {
      OrderDataService.delete(id)
        .then(response => {
          if (response.data){
            window.location = "/cart";
            // this.$router.push({ path: "/cart" });
          }
        })
        .catch(e => {
          console.log(e);
          alert("Silakan login terlebih dahulu");
          this.$router.push({ path: "/signin" });
        });
    },
    getOrder() {
      // this.data.id = this.$store.state.auth.user.id; 
      // console.log(this.data); 
      OrderDataService.get(this.$store.state.auth.user.id)
        .then(response => {
          this.orders = response.data;
          this.positive_numberx = this.orders.map(item =>{
            return `positive_number_${item.id}`;
          });
          this.price_numberx = this.orders.map(item =>{
            return `txt_price_${item.id}`;
          })
          // this.num = this.orders.map(function (item) {
            
          //   let content = `<input type="number" name="num[]" value="${item.qty}" />`
          //   console.log(content);
          //   $('#sum').html(content);
          // });
         
        })
        .catch(e => {
          console.log(e);
          alert("Silakan login terlebih dahulu");
          this.$router.push({ path: "/signin" });
        });
    },
    counterQtyPlus: function(qty, index, currPrice) {
      let counter = parseInt($(`#positive_number_${index}`).val());
      var price = 0;
      if (counter >= qty) {
        price = currPrice*counter;
        $(`#txt_price_${index}`).html(`<var class="price" name="price">${this.formatPrice(price)}</var>`);
        $(`#positive_number_${index}`).val(qty);
        // $('#totalPrice').html(`<dd class="text-right">${this.formatPrice(price)}</dd>`);
        // totalPrice = price;
      } else {
        counter += 1;
        price = currPrice*counter;
        $(`#txt_price_${index}`).html(`<var class="price" name="price">${this.formatPrice(price)}</var>`);
        $(`#positive_number_${index}`).val(counter);
        // $('#totalPrice').html(`<dd class="text-right">${this.formatPrice(price)}</dd>`);
        // totalPrice += currPrice;
        
      }
      
      this.totalPrice();
      this.totalPriceNett();
      
    },
    counterQtyMin: function(qty, index, currPrice) {
      let counter = parseInt($(`#positive_number_${index}`).val());
      
      if (counter <= qty) {
        $(`#positive_number_${index}`).val("1");
        let price = currPrice*counter;
        $(`#txt_price_${index}`).html(`<var class="price" name="price">${this.formatPrice(price)}</var>`);
      } else {
        counter -= 1;
        $(`#positive_number_${index}`).val(counter);
        let price = currPrice*counter;
        $(`#txt_price_${index}`).html(`<var class="price" name="price">${this.formatPrice(price)}</var>`);
      }
      this.totalPrice();
      this.totalPriceNett();
      
    },
    total: function() {
      let total = [];
      Object.entries(this.orders).forEach(([, val]) => {
        total.push(val.product.price*val.qty)
      });
      return total.reduce(function(total, num){ return total+num },0);
    },
    totalPrice: function(){
      // console.log($('.price'));
      var tot = 0;
      let x;
      $('[name="price2"]').each(function (){
        x = parseInt($(this).text().replace(/\D/g,''));
        // console.log(x);
        tot+=x;
        // console.log(tot);
      });
      $('#totalPrice').html(`<dd class="text-right">${this.formatPrice(tot)}</dd>`);
      // console.log(tot);
    },
    totalPriceNett: function(){
      // console.log($('.price'));
      var tot = 0;
      let x;
      $('[name="price2"]').each(function (){
        x = parseInt($(this).text().replace(/\D/g,''));
        // console.log(x);
        tot+=x;
        // console.log(tot);
      });
      $('#totalPriceNett').html(`<strong id="totalPriceNett">${this.formatPrice(tot)}</strong>`);
      // console.log(tot);
    },
    purchase(){
      var arr = [];
      Object.entries(this.orders).forEach(([,val]) =>{
        let qty = $(`#positive_number_${val.id}`).val();
        arr.push({id: val.id, qty: parseInt(qty)})
      })
      // console.log(arr);
      OrderDataService.update(arr)
        .then(() => {
          // console.log(res);
          this.$router.push({ path: "/checkout" });
        })
        .catch(err => {
          console.log(err);
        })
    }
    // imgToMain: function(img) {
    //   let content = `<a href=${img}><img src=${img} /></a>`;
    //   // alert(content);
    //   $("#main_image_id").html(content);
    // }
  },
  mounted() {
    this.message = "";
    this.getOrder();
  }
};
$(function(){
  
})
</script>
