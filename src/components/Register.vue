<template>
  <!-- ========================= SECTION CONTENT ========================= -->
  <section class="section-content padding-y">
    <!-- ============================ COMPONENT REGISTER   ================================= -->
    <div class="card mx-auto" style="max-width:520px; margin-top:25px;">
      <article class="card-body">
        <header class="mb-4">
          <h4 class="card-title">Sign up</h4>
        </header>
        <form name="form" @submit.prevent="handleRegister">
          <div v-if="!successful">
            <div class="form-group">
              <label>Username</label>
              <input
                placeholder="Username"
                v-model="user.username"
                v-validate="'required|min:3|max:20'"
                type="text"
                class="form-control"
                name="username"
              />
              <div
                v-if="submitted && errors.has('username')"
                class="alert-danger"
              >{{ errors.first('username')}}</div>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                placeholder="email@email.com"
                v-model="user.email"
                v-validate="'required|email|max:50'"
                type="email"
                class="form-control"
                name="email"
              />
              <div
                v-if="submitted && errors.has('email')"
                class="alert-danger"
              >{{errors.first('email')}}</div>
              <small class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label>No Handphone</label>
              <input
                placeholder="08xxxxxxxxxx"
                v-model="user.phone"
                v-validate="'required|numeric|max:12'"
                type="text"
                class="form-control"
                name="phone"
              />
              <div
                v-if="submitted && errors.has('phone')"
                class="alert-danger"
              >{{errors.first('phone')}}</div>
            </div>

            <div class="form-group">
              <label>Alamat</label>  
              <input
                placeholder="Jl. Mawar No.8"
                v-model="user.address"
                v-validate="'required'"
                type="text"
                class="form-control"
                name="address"
              />
              <div
                v-if="submitted && errors.has('address')"
                class="alert-danger"
              >{{ errors.first('address')}}
              </div>
            </div>
            <div class="form-group">
              <label>Kecamatan/kabupaten/provinsi</label>
              <autocomplete
                id="ac"
                :search="search"
                placeholder="Cari kecamatan/kabupaten/provinsi"
                aria-label="Cari kecamatan/kabupaten/provinsi"
                :get-result-value="getResultValue"
                v-validate="'required'"
                auto-select
              ></autocomplete>
              <!-- <div
                v-if="submitted && errors.has('district')"
                class="alert-danger"
              >{{ errors.first('district')}}
              </div> -->
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Create password</label>
                <input
                  v-model="user.password"
                  v-validate="'required|min:6|max:40'"
                  class="form-control"
                  type="password"
                  name="password"
                  ref="password"
                  placeholder="Password"
                />
                <div
                  v-if="submitted && errors.has('password')"
                  class="alert-danger"
                >{{errors.first('password')}}</div>
              </div>
              <!-- form-group end.// -->
              <div class="form-group col-md-6">
                <label>Repeat password</label>
                <input class="form-control" v-validate="'required|confirmed:password'" name="password_confirmation" type="password" placeholder="Ulangi password" data-vv-as="password"/>
              </div>
              <div
                  v-if="submitted && errors.has('password_confirmation')"
                  class="alert-danger"
                >{{errors.first('password_confirmation')}}</div>
              <!-- form-group end.// -->
            </div>
            <div class="form-group">
              <button id="btn" type="submit" class="btn btn-primary btn-block">Register</button>
            </div>
            <!-- form-group// -->
            <div class="form-group">
              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="chk" @click="checkTac()"/>
                <div class="custom-control-label">
                  I am agree with
                  <a href="#">terms and contitions</a>
                </div>
              </label>
            </div>
            <!-- form-group end.// -->
          </div>
        </form>
        <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
        >{{message}}</div>
      </article>
      <!-- card-body.// -->
    </div>
    <!-- card .// -->
    <p class="text-center mt-4">
      Have an account?
      <router-link :to="{ name: 'signin', params: 0 }">
        Sign in
      </router-link>
    </p>
    <br />
    <br />
    <!-- ============================ COMPONENT REGISTER  END.// ================================= -->
  </section>
  <!-- ========================= SECTION CONTENT END// ========================= -->
</template>

<script>
import User from "../models/user";
// import AddressDataService from "../services/AddressDataService";
import Autocomplete from '@trevoreyre/autocomplete-vue'

export default {
  name: "Register",
  data() {
    return {
      user: new User("", "", "","", "", ""),
      submitted: false,
      successful: false,
      message: ''
    };
  },
  components: {
    Autocomplete
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile").catch(() => {});
    }
    this.checkTac();
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          let dataAc = $('#ac').val();
          this.user.district_id = dataAc.replace(/[^0-9]/g,'');
          this.$store.dispatch("auth/register", this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
    },
    search(input){
      const url = `${process.env.VUE_APP_URL_API}api/address/${encodeURI(input)}`
      return new Promise(resolve => {
        if (input.length < 3) {
          return resolve([])
        }

        fetch(url)
          .then(response => response.json())
          .then(data => {
            resolve(data)
          })
      })
    },
   
    // We want to display the value
    getResultValue(result) {
      return result.address + ' '+ result.id_district;
    },

    checkTac(){
      let check = $('#chk').is(":checked");
      if (!check){
        $(':input[type="submit"]').prop('disabled', true);
      }
      else{
        $(':input[type="submit"]').prop('disabled', false);
      }
    }
  }
};
</script>
