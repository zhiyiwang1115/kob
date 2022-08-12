<template>
    <div class="playground">
        <GameMap></GameMap>
    </div>
</template>

<script>
import GameMap from './GameMap';

export default {
    components: {
        GameMap
    },
}
</script>

<style scoped>
div.playground {
    width: 60vw;
    height: 70vh;
    /* background-color: lightblue; */
    margin: 0 auto;
    margin-top: 40px;
}
</style>