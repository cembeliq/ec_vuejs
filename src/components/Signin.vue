<template>
  <!-- ========================= SECTION CONTENT ========================= -->
  <section class="section-conten padding-y" style="min-height:80vh">
    <!-- ============================ COMPONENT LOGIN   ================================= -->
    <div class="card mx-auto" style="max-width: 380px; margin-top:100px;">
      <div class="card-body">
        <h4 class="card-title mb-4">Sign in</h4>
        <form name="form" @submit.prevent="handleLogin">
          <a href="#" class="btn btn-facebook btn-block mb-2">
            <i class="fa fa-facebook-f"></i> &nbsp; Sign in with Facebook
          </a>
          <a href="#" class="btn btn-google btn-block mb-4">
            <i class="fa fa-google"></i> &nbsp; Sign in with Google
          </a>
          <div class="form-group">
            <input 
              v-model="user.username"
              v-validate="'required'" 
              class="form-control" 
              placeholder="Username" 
              type="text" 
              name="username"
            />
            <div 
              v-if="errors.has('username')"
              class="alert alert-danger"
              role="alert"
            >Username is required!</div>
          </div>
          <!-- form-group// -->
          <div class="form-group">
            <input 
              v-model="user.password"
              v-validate="'required'"
              class="form-control" 
              placeholder="Password" 
              type="password" 
              name="password"
            />
            <div
              v-if="errors.has('password')"
              class="alert alert-danger"
              role="alert"
            >Password is required!</div>
          </div>
          <!-- form-group// -->

          <div class="form-group">
            <a href="#" class="float-right">Forgot password?</a>
            <label class="float-left custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" checked />
              <div class="custom-control-label">Remember</div>
            </label>
          </div>
          <!-- form-group form-check .// -->
          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
          </div>
          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
          </div>
          <!-- form-group// -->
        </form>
      </div>
      <!-- card-body.// -->
    </div>
    <!-- card .// -->

    <p class="text-center mt-4">
      Don't have account?
      <a href="/register">Sign up</a>
    </p>
    <br />
    <br />
    <!-- ============================ COMPONENT LOGIN  END.// ================================= -->
  </section>
  <!-- ========================= SECTION CONTENT END// ========================= -->
</template>

<script>
import User from "../models/user";

export default {
  name: 'Login',
  data(){
    return{
      user: new User("","","",""),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn(){
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created(){
    if (this.loggedIn){
      this.$router.push('/');
    }
  },
  methods: {
    handleLogin(){
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid){
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password){
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/');
            },
            error => {
              this.loading = false;
              this.message = 
                (error.response && error.response.data) || error.message || error.toString();
            }
          );
        }
      });
    }
  }  
};
</script>