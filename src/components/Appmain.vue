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
        <!-- Contenitore flessibile per le carte dei Pokémon -->
        <div class="flex flex-wrap">
             <!-- Itera sugli elementi della lista dei Pokémon, prendendo solo i primi 10 -->
            <div class="card-item" v-for="(pokemon, index) in store.pokemonlist.slice(0, 10)" :key="pokemon.id">
        <!-- Componente per la carta del singolo Pokémon -->
        <Appcard :mypokemon="pokemon" />
    </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>