<script>
import { state } from '../state';
import AppCards from './AppCards.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    components: {
        AppCards,
    },
    mounted() {
    this.state.fetchCards(this.state.API_URL)
    }
}

</script>
<template>

    <main>
        <div class="container">.
            <AppCards></AppCards>
        </div>
    </main>

</template>


<style lang="scss" scoped>

main {
    background-color: rgb(95, 92, 92);
}

</style>