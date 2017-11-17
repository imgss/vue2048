<template>
    <div class='gamehead'>
  <h1 class='title'>2048</h1>
  <div>
    
  <span class='score'>
      <span class='type'>score</span> {{score}}
      <span ref="plus" style="position:absolute; right:30px; opacity:0; color:#444; font-size:16px" :class="{'addScore':addScore}">+{{addScore}}</span>
    </span>
    
  <span class='score'><span class='type'>best</span> {{bestScore}}</span>
  </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addScore: 0
        }
    },
    computed: {
        score () {
            return this.$store.state.score
        },
        bestScore () {
            return this.$store.state.bestScore
        }
    },
    watch:{
        score(now, prev){
            console.log(this.$refs.pplus)
            clearTimeout(this.timer)
            this.addScore = now - prev
            this.timer = setTimeout(() => this.addScore = 0 , 1000)
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
        position: relative;
        line-height: 2em;
        font-size: 1.3em;
        background-color: #bbada0;
        color: white;
        padding: 2px;
    }
    .addScore {
        animation: plus 1.2s 1;
    }
    @keyframes plus {
        from {
            transform: translateY(10px);
            opacity: 1;
        }
        to {
            transform: translateY(-10px);
            opacity: 1;
        }
    }
</style>