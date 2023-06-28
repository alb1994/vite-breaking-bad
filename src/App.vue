<script>
import axios from 'axios';
import AppSearch from './components/AppSearch.vue';
import Appmain from './components/Appmain.vue';
import { store } from './store.js';

export default {
  components: {
    AppSearch,
    Appmain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    ricerca() {
      let url = `${this.store.apiUrl}?type1=${this.store.type1}`;
      console.log(this.store.type1);
      // Effettua una richiesta GET all'API utilizzando l'URL costruito
      axios.get(url).then((response) => {
        this.store.pokemonlist = response.data.docs;
        console.log(response.data.docs);
        this.filtratiPokemon();
      });
    },
    filtratiPokemon() {
      // Filtra la lista dei Pokémon in base al tipo selezionato
      if (this.store.type1) {
        this.store.pokemonlist = this.store.pokemonlist.filter((pokemon) =>
          pokemon.type1.toLowerCase().includes(this.store.type1.toLowerCase())
        );
      }
    },
  },
  computed: {
    filteredPokemonList() {
      // Filtra la lista dei Pokémon in base al tipo selezionato
      if (this.store.type1) {
        return this.store.pokemonlist.filter((pokemon) =>
          pokemon.type1.toLowerCase().includes(this.store.type1.toLowerCase())
        );
      } else {
        // Se nessun tipo è selezionato, restituisci l'intera lista dei Pokémon
        return this.store.pokemonlist;
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <AppSearch @filtro="ricerca"></AppSearch>
    <Appmain></Appmain>
  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>