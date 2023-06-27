<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            listaTipi: [
                , "Bug",
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
        <select v-model="store.type1">
            <option v-for="(tipo, index) in listaTipi" :key="index" :valute="tipo">{{tipo}}</option>
            
        </select>
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
</style>