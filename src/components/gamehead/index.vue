<template>
    <div class='gamehead'>
  <h1 class='title'>2048</h1>
  <div>
  <span class='score'><span class='type'>score</span> {{score}}</span>
  <span class='score'><span class='type'>best</span> {{bestscore}}</span>
  </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                score: 0,
                bestscore: 0
            }
        }
    };
</script>

<style scoped>
    .title {
        font-size: 2em;
        margin: 5px;
    }
    
    .gamehead {
        display: flex;
        justify-content: space-between;
        flex-direction: center;
    }
    
    .type {
        font-size: 10px;
        text-transform: uppercase;
    }
    
    .score {
        vertical-align: center;
        line-height: 2em;
        font-size: 1.3em;
        background-color: #bbada0;
        color: white;
        padding: 2px;
    }
</style>