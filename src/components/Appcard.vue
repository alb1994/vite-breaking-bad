<script>
export default {
    props: {
        mypokemon: Object
    }
}
</script>
<template lang="">
    <div>
        <img :src="mypokemon.imageUrl" :alt="mypokemon.imageUrl" class="img">
        <h4>{{ mypokemon.name }}</h4>
    </div>
</template>

<style lang="scss" scoped></style>