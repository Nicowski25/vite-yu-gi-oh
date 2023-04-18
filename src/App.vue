<script>
import { state } from './state';

export default {

  data() {
    return {
      state
    }
  },
  mounted() {
    this.state.fetchCards(this.state.API_URL)
  }
}
</script>

<template>
  <!-- header section -->
  <header class="text-center py-4">
    <h1 class="text-light">Yu-Gi-Oh</h1>
  </header>

  <!-- main section -->
  <main>
    <section class="cards">
      <div class="container">
        <div class="row row-cols-sm-4 g-4">
  
          <div class="col" v-for="card in state.cards">
            <div class="card h-100">
              <img class="img-fluid card-img-top" :src="card.card_images[0].image_url" alt="">
              <div class="card-body text-light">
                <h3> {{ card.name }} </h3>
                <div class="ak">
                  {{ card.archetype }}
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </section>



  </main>
</template>

<style lang="scss" scoped>

header {
  background-color: #d58f39;
}

main {
  background-color: #212428;
}

.card {
  background-color: #3b3838a3;
  filter: blur(0 0 2rem);
}

</style>