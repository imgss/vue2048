<template>
    <div class='game-container'>
  <grid></grid>
  <tiles></tiles>
    </div>
</template>
<script>
    import grid from './grid'
    import tiles from './tiles'
    export default {
        components: {
            grid,
            tiles
        }
    };
</script>
<style>
    .game-container {
        position: absolute;
        padding: 1%;
        margin-top: 30px;
        width: 500px;
        height: 500px;
        box-sizing: content-box;
        background: #bbada0;
        border-radius: 2px;
    }
</style>