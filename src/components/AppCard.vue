<script>

export default {
    name: 'AppCard',
    props: {
        card: Object,
    }
}
</script>

<template>

        <div class="col">
            <div class="card h-100">
                <img class="img-fluid card-img-top" :src="card.card_images[0].image_url" alt="">
                <div class="card-body">
                    <h3> {{ card.name }} </h3>
                    <div class="ak">
                        {{ card.archetype }}
                    </div>
                </div>
            </div>
        </div>

</template>

<style lang="scss" scoped>

.card-body {
    background: linear-gradient(180deg, rgba(0,0,0,0.5774509632954745) 0%, rgba(231,168,40,1) 100%); 
}

</style>