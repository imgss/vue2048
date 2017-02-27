<template>
    <div class='tile' :style="{backgroundColor:colormap[tilenum]}">{{tilenum}}</div>
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
            tilenum: null
        }

    }
</script>

<style>
    .tile {
        font-size: 3rem;
        color: #f9f6f2;
        text-align: center;
        user-select: none;
        line-height: 120px;
        vertical-align: middle;
    }
</style>