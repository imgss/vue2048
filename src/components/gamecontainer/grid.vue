<template>
  <div class='grid'>
      <div v-for="cell in cells" class='cell'></div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                cells: 16
            }
        }

    }
</script>

<style>
    .grid {
        position: absolute;
        width: 98%;
        height: 98%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .cell {
        width: 24%;
        height: 24%;
        background: rgba(238, 228, 218, 0.35);
    }
</style>