<template>
  <div class='tiles'>
  <tile v-for='tile in tiles' class='tile' :tilenum="tile.number"></tile>
  </div>
</template>

<script>
    import tile from './tile'
    export default {
        data() {
            return {
                tileslength: 16,
                tiles: []
            }
        },
        components: {
            tile
        },
        created() {
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    this.tiles.push({
                        number: null,
                        x: i,
                        y: j
                    });
                }
            }
            this.gameInit(4);
        },
        methods: {
            gameInit(size) {
                for (var i = 0; i < size; i++) {
                    var position = Math.floor(15 * Math.random());
                    console.log(position);
                    this.tiles[position].number = this.randomNumber();
                }
            },
            randomTile() {
                var tile = {};
                tile.number = this.randomNumber();
                tile.x = this.randomPosition();
                tile.y = this.randomPosition();
                return tile;

            },
            randomPosition() {
                return Math.floor(4 * Math.random());
            },
            randomNumber() {
                return 2 + 2 * Math.round(Math.random());
            }
        }

    }
</script>

<style>
    .tiles {
        position: absolute;
        width: 95%;
        height: 95%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .tile {
        width: 24%;
        height: 24%;
    }
</style>