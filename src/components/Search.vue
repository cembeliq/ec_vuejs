<template>
  <section class="header-main border-bottom">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-2 col-6">
          <!-- <a href="/" >
            <img src="../assets/logo.png" style="width:150px"/>
          </a> -->
          <router-link :to="{ name: 'home', params: 0 }">
            <img src="../assets/logo.png" style="width:150px"/>
          </router-link>
          <!-- brand-wrap.// -->
        </div>
        <div class="col-lg-6 col-12 col-sm-12">
          <form @keyup.enter="onSearch($event)" class="search">
            <div class="input-group w-100">
              <input type="text" class="form-control" name="search" v-model=search :placeholder=search />
              <div class="input-group-append">
                <button class="btn btn-primary" @click="onSearch">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          <!-- search-wrap .end// -->
        </div>
        
        <div v-if="currentUser" class="col-lg-4 col-sm-6 col-12">
          <div class="widgets-wrap float-md-right">
            <div class="widget-header mr-3">
              <router-link :to="{ name: 'cart', params: 0 }">
                <button class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></button>
              </router-link>
              <!-- <a href="cart" class="icon icon-sm rounded-circle border">
                <i class="fa fa-shopping-cart"></i>
              </a> -->
              <span class="badge badge-pill badge-danger notify">0</span>
            </div>
            <div class="widget-header icontext">
              <a href="#" class="icon icon-sm rounded-circle border">
                <i class="fa fa-user"></i>
              </a>
              <div class="text">
                <span class="text-muted">Selamat datang {{ currentUser.data.username }} !</span>
                <div>
                  <!-- <a href="#">Sign in</a> |
                  <a href="#">Register</a> -->
                  <a class="nav-link" href @click.prevent="logOut">
                    <font-awesome-icon icon="sign-out-alt" />Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- widgets-wrap.// -->
        </div>


        <!-- col.// -->
        <div v-if="!currentUser" class="col-lg-4 col-sm-6 col-12">
          <div class="widgets-wrap float-md-right">
            <div class="widget-header mr-3">
              <router-link :to="{ name: 'cart', params: 0 }">
                <button class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></button>
              </router-link>
              <!-- <a href="cart" class="icon icon-sm rounded-circle border">
                <i class="fa fa-shopping-cart"></i>
              </a> -->
              <span class="badge badge-pill badge-danger notify">0</span>
            </div>
            <div class="widget-header icontext">
              <a href="#" class="icon icon-sm rounded-circle border">
                <i class="fa fa-user"></i>
              </a>
              <div class="text">
                <span class="text-muted">Selamat datang!</span>
                <div>
                  <!-- <a href="#">Sign in</a> |
                  <a href="#">Register</a> -->
                  <router-link :to="{ name: 'signin', params: 0 }">
                    Sign in
                  </router-link> |
                  <router-link :to="{ name: 'register', params: 0 }">
                    Register
                  </router-link>
                  
                </div>
              </div>
            </div>
          </div>
          <!-- widgets-wrap.// -->
        </div>
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </div>
    <!-- container.// -->
  </section>
  <!-- header-main .// -->
</template>

<script>
// import ProductPopulerDataService from "../services/ProductPopulerDataService";

export default {
  data(){
    return{
      search: "",
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/').catch(() => {});
      this.$router.go()

    },
    onSearch(event){
      event.preventDefault();
      window.location = `/category/${this.search}`;
    }
  }
};
</script>