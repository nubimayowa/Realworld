<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign In</h1>
          <p class="text-xs-center">
            <router-link to="/register">Need an Account ??</router-link>
          </p>

          <ul class="error-messages" v-if="loginError">
            <li>{{ loginError }}</li>
          </ul>

          <form>
            <!-- <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Your Name">
          </fieldset> -->
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                v-model="email"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                v-model="password"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button
              @click="login()"
              type="button"
              class="btn btn-outline-primary pull-xs-right"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import users from "../store/modules/users";
import toast from "@/store/modules/toast";

@Component
export default class Login extends Vue {
  email = "";
  password = "";
  loginError = "";

  login() {
    users
      .login({
        email: this.email,
        password: this.password
      })
      .then(data => {
        this.$router.push("/");
        toast.success("Login Successfully", "Success", 3000);
      })

      .catch(err => {
        console.error(err);
        this.loginError = "Invalid email or password";
        toast.error("Login not Successfully", "Error", 3000);
      });
  }
}
</script>
