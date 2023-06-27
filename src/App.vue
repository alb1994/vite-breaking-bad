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
  mounted() {
    axios.get(store.apiUrl).then((response) => {
      store.pokemonlist = response.data.docs;
      console.log(response.data.docs)
    })
  }
}
</script>

<template>
  <div class="container">
    <AppSearch>

    </AppSearch>
    <Appmain>

    </Appmain>
  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
