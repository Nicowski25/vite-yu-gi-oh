<script>
import { state } from '../state';
import AppCard from './AppCard.vue';

export default {
    name: 'AppCards',
    components: {
        AppCard
    },
    data() {
        return {
            state
        }
    }
}
</script>


<template>

    <div class="row row-cols-sm-4 g-4">

        <AppCard v-for="card in state.cards" :card=card></AppCard>

    </div>

</template>


<style lang="scss" scoped></style>