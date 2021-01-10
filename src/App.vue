<template>
  <div id="app">
    <div id="nav">
      <AppNavbar></AppNavbar>
      <router-view></router-view>
      <AppFooter></AppFooter>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppFooter from "../src/components/AppFooter.vue";
import AppNavbar from "../src/components/AppNavbar.vue";
@Component({
  components: {
    AppFooter,
    AppNavbar
  }
})
export default class App extends Vue {}
</script>
<style></style>
