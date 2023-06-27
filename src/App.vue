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
    }
  },
  methods: {
    ricerca() {
      let url = `${store.apiUrl}?type1=${store.type1}`;
      console.log(store.type1);

      axios.get(url).then((response) => {
        store.pokemonlist = response.data.docs;
        console.log(response.data.docs);
        this.filtratiPokemon();
        delete response.data.limit;
        console.log(response.data)
      });
    },
    filtratiPokemon() {
      if (store.type1) {
        store.pokemonlist = store.pokemonlist.filter((pokemon) =>
          pokemon.type1.toLowerCase().includes(store.type1.toLowerCase())
        );
      }
    }
  },
}
</script>

<template>
  <div class="container">
    <AppSearch @filtro="ricerca">

    </AppSearch>
    <Appmain>

    </Appmain>
  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
