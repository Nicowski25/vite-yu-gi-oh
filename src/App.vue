<script>
  import { store } from './store';

  export default {
    props: {
      cards: Object,
    },
    data() {
      return {
        store
      }
    }
  }
</script>

<template>
<!-- header section -->
  <header>
    <h1>Yu-Gi-Oh</h1>
  </header>

  <!-- main section -->
  <main>

    <div class="container">
      <div class="row">

        <div class="col" v-for="card in cards">
          <img :src="card.image" alt="">
        </div>

      </div>
    </div>

  </main>
</template>

<style lang="scss" scoped>

</style>