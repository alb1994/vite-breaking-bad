// Oggetto reattivo che rappresenta il nostro store
import { reactive } from 'vue';

export const store = reactive({
    // URL dell'API per ottenere la lista di Pokémon.
    apiUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=50&page=1',

    // Variabile che rappresenta il tipo di Pokémon.
    type1: '',

    pokemonlist: [],
});