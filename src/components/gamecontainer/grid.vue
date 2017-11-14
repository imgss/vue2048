<template>
  <div class='grid'>
      <div v-for="cell in cells" :key="cell" class='cell'></div>
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
        width: 95%;
        height: 95%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .cell {
        width: 23%;
        height: 23%;
        background: rgba(238, 228, 218, 0.35);
        border-radius: 2px;
    }
</style>