<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            //array tipologia pokemon
            listaTipi: [,
                "Bug",
                "Dark",
                "Dragon",
                "Electric",
                "Fairy",
                "Fighting",
                "Fire",
                "Flying",
                "Ghost",
                "Grass",
                "Ground",
                "Ice",
                "Normal",
                "Poison",
                "Psychic",
                "Rock",
                "Steel",
                "Water"
            ]
        }
    },
    methods: {

    },

}
</script>
<template lang="">
    <div class="spacebet">
    <div>
        <div class="circle red noblock"></div>
        <div class="circle green noblock"></div>
        <div class="circle  yellow noblock"></div> 
    </div>
    <div>
        <!-- Selezione del tipo di Pokémon -->
        <select v-model="store.type1" @keyup.enter="$emit('filtro')">
            <!-- Iterazione sugli elementi della lista dei tipi di Pokémon -->
            <option v-for="(tipo, index) in listaTipi" :key="index" :value="tipo">{{ tipo }}</option>
        </select>
        <!-- Pulsante per avviare la ricerca -->
        <button @click="$emit('filtro')">go</button>
    </div>
    </div>
</template>

<style lang="scss">
.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px;
}

.yellow {
    background-color: yellow;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}

select {
    margin: 20px;
}

button {
    margin-right: 10px;
}
</style>