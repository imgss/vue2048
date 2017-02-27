<template>
  <div class='tiles' @keydown='move'>
  <tile v-for='(tile,index) in tiles' class='tile' :tilenum="tile.number"></tile>
  </div>
</template>

<script>
    import tile from './tile'
    export default {
        data() {
            return {
                tileslength: 16,
                tiles: [],
                map: {
                    38: 0, // Up
                    39: 1, // Right
                    40: 2, // Down
                    37: 3, // Left
                    75: 0, // Vim up
                    76: 1, // Vim right
                    74: 2, // Vim down
                    72: 3, // Vim left
                    87: 0, // W
                    68: 1, // D
                    83: 2, // S
                    65: 3 // A
                }
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
        mounted() {
            var self = this;
            document.addEventListener('keydown', function(e) {
                var directioncode = self.map[e.which];
                self.move(directioncode);
            })

        },
        methods: {
            gameInit(size) {
                for (var i = 0; i < size; i++) {
                    var position = Math.floor(15 * Math.random());
                    console.log(position);
                    this.tiles[position].number = this.randomNumber();
                }
            },
            randomNumber() {
                return 2 + 2 * Math.round(Math.random());
            },
            getDirection() {

            },
            move(vector) {
                console.log(vector);

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
</style>