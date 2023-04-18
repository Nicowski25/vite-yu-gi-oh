<script>
import { state } from './state';
import axios from 'axios';
export default {

  data() {
    return {
      state
    }
  },
  methods: {
    fetchCards(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response);
          state.cards = response.data.data
          state.meta = response.data.meta
        })
        .catch(err => {
          console.log(err);
          console.log(err.message);
        })
    }
  },
  mounted() {
    this.fetchCards(state.API_URL)
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
    <section class="cards">
      <div class="container">
        <div class="row row-cols-sm-2 g-4">
  
          <div class="col" v-for="card in state.cards">
            <div class="card">
              <img class="img-fluid" :src="card.card_images[0].image_url" alt="">
  
            </div>
          </div>
  
        </div>
      </div>
    </section>



  </main>
</template>

<style lang="scss" scoped></style>