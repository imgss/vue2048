<template>
  <div class='tiles' @keydown='move'>
  <row v-for='row in tiles' class='row' :row="row" :from='-2'></row>
  </div>
</template>

<script>
    import row from './row'
    export default {
        data() {
            return {
                tileslength: 16,
                tiles: [],
                moved: false,
                over: false,
                score: 0,
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
            row
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
        beforeUpdate() {
            if (this.moved && !this.over) {
                this.generateNewTile();
                var that = this;
                setTimeout(that.$forceUpdate, 2000);
                this.moved = false;
            }

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
            move(directionCode) {
                var newTiles = [];
                var newColumnTiles = [];
                switch (directionCode) {
                    case 3: //move left
                        {
                            for (let x = 0; x < 4; x++) {
                                newTiles.push(this.moveAndMerge(this.tiles[x], false));
                            }
                            break;
                        }
                    case 2:
                        { //move down
                            for (let y = 0; y < 4; y++) {
                                var column = [];
                                for (var x = 0; x < 4; x++) {
                                    column.push(this.tiles[x][y]);

                                }
                                newColumnTiles.push(this.moveAndMerge(column, true));
                            }

                            for (let ny = 0; ny < 4; ny++) {
                                let row = [];
                                for (var nx = 0; nx < 4; nx++) {

                                    row.push(newColumnTiles[nx][ny])
                                }
                                newTiles.push(row);
                            }
                            // console.log("down");
                            // console.log(newTiles);
                            break;
                        }
                    case 1:
                        { //move right
                            for (let i = 0; i < 4; i++) {
                                newTiles.push(this.moveAndMerge(this.tiles[i], true));
                            }

                            break;

                            //generate tile

                        }
                    case 0:
                        { //move top
                            for (let y = 0; y < 4; y++) {
                                var column = [];
                                for (var x = 0; x < 4; x++) {
                                    column.push(this.tiles[x][y]);
                                }
                                newColumnTiles.push(this.moveAndMerge(column, false));

                            }

                            for (let ny = 0; ny < 4; ny++) {
                                let row = [];
                                for (let nx = 0; nx < 4; nx++) {
                                    row.push(newColumnTiles[nx][ny])
                                }
                                newTiles.push(row);

                            }
                            break;

                        }

                }
                for (let x = 0; x < 4; x++) {
                    for (let y = 0; y < 4; y++) {
                        if (newTiles[x][y] !== this.tiles[x][y]) {
                            this.moved = true; //方块移动了
                        }
                    }
                }

                this.tiles = newTiles;
                newTiles = [];
            },
            moveAndMerge(list, reverse = false) {

                var length = 4;

                var n = reverse ? length - 1 : 0;
                var nList = new Array(length).fill(null);
                if (!reverse) {
                    for (var x = 0; x < length; x++) {
                        if (list[x] !== null) {
                            if (list[x] == nList[n - 1]) {
                                nList[n - 1] *= 2;
                                this.$store.commit("addScore", nList[n - 1]);
                                break;
                            } else {
                                nList[n++] = list[x];
                            }
                        }
                    } //把非null的tile紧密排列,合并

                } else {
                    for (var x = length - 1; x > -1; x--) {
                        if (list[x] !== null) {
                            if (list[x] == nList[n + 1]) {
                                nList[n + 1] *= 2;
                                this.$store.commit("addScore", nList[n + 1]);
                            } else {
                                nList[n--] = list[x];
                            }
                        }
                    }

                }
                return nList;
            },
            generateNewTile() { //生成新数字
                var row, column;

                function haveSpace(tiles) {
                    return tiles.some(function(row) {
                        return row.some(function(tile) {
                            return tile == null;
                        })
                    })
                };
                if (haveSpace(this.tiles)) {
                    do {
                        row = Math.floor(4 * Math.random());
                        column = Math.floor(4 * Math.random());

                    }
                    while (this.tiles[row][column] !== null);
                    this.tiles[row][column] = Math.random() > 0.5 ? 2 : 4;
                } else {
                    this.over = true;
                }
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