<template>
  <div class='tiles' @keydown='move'>
  <tile v-for='tilenum in tilesNumber' class='tile' :tilenum="tilenum" :from='-2'></tile>
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
        computed: {
            tilesNumber() {
                var tilesNumber = [];
                for (var x = 0; x < 4; x++) {
                    for (var y = 0; y < 4; y++) {
                        tilesNumber.push(this.tiles[x][y]);
                    }
                }
                console.log(tilesNumber);
                return tilesNumber;
            }

        },
        components: {
            tile
        },
        created() {
            for (var i = 0; i < 4; i++) {
                this.tiles[i] = [];
                for (var j = 0; j < 4; j++) {
                    this.tiles[i][j] = null;
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
                    var positionX = Math.floor(4 * Math.random());
                    var positionY = Math.floor(4 * Math.random());
                    this.tiles[positionX][positionY] = this.randomNumber();
                }
            },
            randomNumber() {
                return 2 + 2 * Math.round(Math.random());
            },
            move(code) {
                var newTiles = [];
                var newColumnTiles = [];
                switch (code) {
                    case 3: //move left
                        {
                            for (var x = 0; x < 4; x++) {
                                newTiles.push(this.justmove(this.tiles[x], false));
                            }
                            //merge tile
                            //generate tile
                            break;
                        }
                    case 2:
                        { //move down
                            for (var y = 0; y < 4; y++) {
                                var column = [];
                                for (var x = 0; x < 4; x++) {
                                    column.push(this.tiles[x][y]);

                                }
                                newColumnTiles.push(this.justmove(column, true));

                            }

                            for (var ny = 0; ny < 4; ny++) {
                                let row = [];
                                for (var nx = 0; nx < 4; nx++) {

                                    row.push(newColumnTiles[nx][ny])
                                }
                                newTiles.push(row);

                            }

                            break;
                        }
                    case 1:
                        { //move right
                            console.log('right');
                            for (var i = 0; i < 4; i++) {
                                newTiles.push(this.justmove(this.tiles[i], true));
                            }
                            break;

                            //generate tile

                        }
                    case 0:
                        { //move top
                            for (var y = 0; y < 4; y++) {
                                var column = [];
                                for (var x = 0; x < 4; x++) {
                                    column.push(this.tiles[x][y]);

                                }
                                newColumnTiles.push(this.justmove(column, false));

                            }

                            for (var ny = 0; ny < 4; ny++) {
                                let row = [];
                                for (var nx = 0; nx < 4; nx++) {
                                    row.push(newColumnTiles[nx][ny])
                                }
                                newTiles.push(row);

                            }
                            break;

                        }

                }
                this.tiles = newTiles;
                console.log(newTiles);
                newTiles = [];
            },
            justmove(list, reverse) {

                var length = 4; //写成list.length会出现length成为5的bug

                var n = reverse ? length : 0;
                var nList = new Array(length).fill(null);
                if (!reverse) {
                    for (var x = 0; x < length; x++) {
                        if (list[x] !== null) {
                            nList[n++] = list[x];
                        }
                    }
                } else {
                    for (var x = length; x > -1; x--) {
                        if (list[x] !== null) {
                            nList[n--] = list[x];
                        }
                    }

                }

                return nList;
            },
            getVector(code) {
                var vList = [{
                    str: 'top',
                    x: 0,
                    y: -1
                }, {
                    str: 'right',
                    x: 1,
                    y: 0
                }, {
                    str: 'down',
                    x: 0,
                    y: 1
                }, {
                    str: 'left',
                    x: -1,
                    y: 0
                }];
                return vList[code];
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