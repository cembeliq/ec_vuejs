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

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Create password</label>
                <input
                  v-model="user.password"
                  v-validate="'required|min:6|max:40'"
                  class="form-control"
                  type="password"
                  name="password"
                />
                <div
                  v-if="submitted && errors.has('password')"
                  class="alert-danger"
                >{{errors.first('password')}}</div>
              </div>
              <!-- form-group end.// -->
              <div class="form-group col-md-6">
                <label>Repeat password</label>
                <input class="form-control" type="password" />
              </div>
              <!-- form-group end.// -->
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">Register</button>
            </div>
            <!-- form-group// -->
            <div class="form-group">
              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" checked />
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
      <a href="/signin">Log In</a>
    </p>
    <br />
    <br />
    <!-- ============================ COMPONENT REGISTER  END.// ================================= -->
  </section>
  <!-- ========================= SECTION CONTENT END// ========================= -->
</template>

<script>
import User from "../models/user";

export default {
  name: "Register",
  data() {
    return {
      user: new User("", "", "",""),
      submitted: false,
      successful: false,
      message: ""
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
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
    }
  }
};
</script>