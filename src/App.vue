<script>
import { state } from './state';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },

  data() {
    return {
      state
    }
  }
}
</script>

<template>

  <!-- header section -->
  <AppHeader></AppHeader>
  <!-- main section -->
  <AppMain></AppMain>
  <!-- footer section -->
  <AppFooter></AppFooter>

</template>

<style lang="scss" scoped>

</style>