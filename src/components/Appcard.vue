<script>
export default {
    props: {
        mypokemon: Object
    }
}
</script>
<template lang="">
    <div>
        <!-- Immagine del Pokémon -->
        <img :src="mypokemon.imageUrl" :alt="mypokemon.imageUrl" class="img">
        <!-- Nome del Pokémon -->
        <h4>{{ mypokemon.name }}</h4>
    </div>
</template>

<style lang="scss" scoped></style>