<script>

import Appcard from './Appcard.vue';
import { store } from '../store.js';
export default {
    components: {
        Appcard,
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div class="card">
        <div class="flex flex-wrap">
            <div class="card-item" v-for="(pokemon, index) in store.pokemonlist.slice(0, 10)" :key="pokemon.id">
        <Appcard :mypokemon="pokemon" />
    </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>