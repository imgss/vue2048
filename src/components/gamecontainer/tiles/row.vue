<template>
<div>
    
    <div class='tile' v-for="tile in row" :style="{backgroundColor:colormap[tile] ,color: tile>4?'#f9f6f2':'#333'}" >{{tile}}</div>
    
</div>
</template>

<script>
    export default {
        data() {
            return {
                colormap: {
                    2: "#eee4da",
                    4: "#ede0c8",
                    8: "#f2b179",
                    16: '#f59563',
                    32: '#f67c5f',
                    64: '#f65e3b',
                    128: '#edcf72',
                    256: '#edcc61',
                    512: '#edc850',
                    1024: '#edc53f',
                    2048: '#edc22e',
                    4096: '#3c3a32',
                    8192: '#3c3a32',
                }
            }
        },
        props: {
            row: null
        }

    }
</script>

<style>
    .row {
        display: flex;
        width: 100%;
        height: 23%;
        justify-content: space-between;
    }
    
    .tile {
        font-size: 3rem;
        transition: all 0.3s ease;
        color: #f9f6f2;
        text-align: center;
        user-select: none;
        line-height: 120px;
        vertical-align: middle;
        border-radius: 2px;
        width: 23%;
        height: 100%;
    }
    
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    
    .slide-fade-enter,
    .slide-fade-leave-active {
        transform: translateX(10px);
        opacity: 0;
    }
</style>