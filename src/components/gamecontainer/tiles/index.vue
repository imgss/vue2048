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
                //console.log(tilesNumber);
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
                            // console.log("left");
                            // console.log(newTiles);
                            this.merge(newTiles);
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
                                this.merge(newColumnTiles);
                            }

                            for (var ny = 0; ny < 4; ny++) {
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
                            for (var i = 0; i < 4; i++) {
                                newTiles.push(this.justmove(this.tiles[i], true));
                            }
                            // console.log("right");
                            // console.log(newTiles);
                            this.merge(newTiles);

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
                                this.merge(newColumnTiles);

                            }

                            for (var ny = 0; ny < 4; ny++) {
                                let row = [];
                                for (var nx = 0; nx < 4; nx++) {
                                    row.push(newColumnTiles[nx][ny])
                                }
                                newTiles.push(row);
                            // console.log("top");
                            // console.log(newTiles);

                            }
                            break;

                        }

                }
                
                this.tiles = newTiles;
                //console.log(this.tiles);
                //this.generateNewTile();
                //console.log(this.tiles );
                newTiles = [];
            },
            justmove(list, reverse=false) {
                console.log(list);

                var length = 4; //写成list.length会出现length成为5的bug

                var n = reverse ? length-1 : 0;
                var nList = new Array(length).fill(null);
                if (!reverse) {
                    for (var x = 0; x < length; x++) {
                        if (list[x] !== null) {
                            nList[n++] = list[x];
                        }
                    }
                } else {
                    for (var x = length-1; x > -1; x--) {
                        if (list[x] !== null) {
                            nList[n--] = list[x];
                        }
                    }

                }
                console.log("------>")
console.log(nList);
                return nList;
            },
            merge(nlist) {
                for(let row of nlist){
                    for(var n=0;n<3;n++){
                        if(row[n]==null){
                            continue;
                        }
                        if(row[n]==row[n+1]){
                            row[n]=null;
                            row[n+1]*=2;
                            break;
                        }
                    }
                }
            },
            generateNewTile(){//生成新数字
                var randomPosition=parseInt(15*Math.random());
                var row=parseInt(randomPosition/4);
                var column=randomPosition%4;
                while(!this.tiles[row][column]){
                    randomPosition=parseInt(15*Math.random());
                     row=parseInt(randomPosition/4);
                column=randomPosition%4;

                }
                //console.log(this.tiles);
                    this.tiles[row][column]=Math.random()>0.5?2:4;
//console.log(this.tiles);
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