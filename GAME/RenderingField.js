// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

//var RECT_SIDE = 30;
//var FIELD_WIDTH = 10000;
//var FIELD_HEIGHT = 10000;
//var RECT_NUMBER = 10000 / 30 - 1; //кол-во ячеек в длину по верт/горизонтали
//var rect_arr = new Array();

var Field = {

    Canvas: document.getElementById('canvas'),
    Ctx: canvas.getContext('2d'),
    Coords: {
        X: 500,
        Y: 500
    },
    CELL_SIZE: 30,
    FIELD_CELLS_X: 3000,
    FIELD_CELLS_Y: 3000,
    FIELD_WIDTH: 720,
    FIELD_HEIGHT: 720,
    cycle: 0,
    DIRECTION_UP: 38,
    DIRECTION_DOWN: 487,
    DIRECTION_LEFT: 471,
    DIRECTION_RIGHT: 97,
    LEFT_X: 500,
    RIGHT_X: 500,
    TOP_Y: 500,
    BOTTOM_Y: 500,
    CurrentDirection: 38,
    Data: [],
    INTERVAL_DURATION: 250,
    current_move: 0,
    countStack: 0,
    countBot: 0,



    init: function() {
        Field.genField();
        Field.PlayerBehavior.play();
        Field.Bot.drawBot();

    }

    ,
    genField: function() {
        for (var i = 0; i < this.FIELD_CELLS_X; i++) {
            this.Data[i] = [];
            for (var j = 0; j < this.FIELD_CELLS_Y; j++) {
                if ((i == 0 || i == (this.FIELD_CELLS_X - 1)) || (j == 0 || j == (this.FIELD_CELLS_Y - 1))) {
                    this.Data[i][j] = Field.CELL_BORDER;
                } else {
                    this.Data[i][j] = Field.CELL_EMPTY;
                }

            }
        }

        for (var i = this.Coords.X - 1; i <= this.Coords.X + 1; i++) {
            for (var j = this.Coords.Y - 1; j <= this.Coords.Y + 1; j++) {
                this.Data[i][j] = Field.CELL_PLAYER;
            }
        }
        Field.drawField();

    }

    ,
    drawField: function() {

        var visible_x = this.FIELD_WIDTH / this.CELL_SIZE;
        var visible_y = this.FIELD_HEIGHT / this.CELL_SIZE;


        ctx.shadowBlur = 10;
        ctx.shadowColor = "grey";
        for (var i = 0; i < visible_x; i++) {
            //rect_arr[i] = new Array();

            for (var j = 0; j < visible_y; j++) {

                var x = this.Coords.X - Math.floor(visible_x / 2) + i;
                var y = this.Coords.Y - Math.floor(visible_y / 2) + j;

                Field.drawCell(x, y, i, j);

            }
        }
    }

    ,
    CELL_EMPTY: 0,
    CELL_PLAYER: 2,
    CELL_BORDER: 3,
    TRACK: 4,
    drawCell: function(x, y, n, m) {

        var val = this.Data[x][y];
        switch (val) {
            case Field.CELL_EMPTY:
                ctx.fillStyle = "gainsboro"; //цвет ячеек
                break;
            case Field.TRACK:
                ctx.fillStyle = "#F08080";
                break;
            case Field.CELL_PLAYER:
                ctx.fillStyle = "red";
                break;
            case Field.CELL_BORDER:
                ctx.fillStyle = "black";
                break;
            case Field.Bot.CELL_BOT:
                ctx.fillStyle = "#9932CC";
                break;
        }

        ctx.fillRect(n * this.CELL_SIZE, m * this.CELL_SIZE, this.CELL_SIZE, this.CELL_SIZE);


    }

    ,
    PlayerBehavior: {

        play: function() {
            document.addEventListener("keydown", Field.PlayerBehavior.playerMove);
            Field.cycle = setInterval(Field.PlayerBehavior.move, Field.INTERVAL_DURATION);

        },
        move: function() {
            switch (Field.CurrentDirection) {
                case Field.DIRECTION_RIGHT:
                    Field.Coords.X += 1;
                    break;
                case Field.DIRECTION_LEFT:
                    Field.Coords.X -= 1;
                    break;
                case Field.DIRECTION_UP:
                    Field.Coords.Y -= 1;
                    break;
                case Field.DIRECTION_DOWN:
                    Field.Coords.Y += 1;
                    break;

            }
            Field.drawField();
            Field.PlayerBehavior.drawPlayer();

            // Алгоритм поиска пересечений

            // 1. Переопределить точки, являющиеся углами окаймляющего прямоугольника в массиве , вывести их


            Field.Coords.X <= Field.LEFT_X ? Field.LEFT_X = Field.Coords.X : false;
            Field.Coords.X >= Field.RIGHT_X ? Field.RIGHT_X = Field.Coords.X : false;
            Field.Coords.Y >= Field.TOP_Y ? Field.TOP_Y = Field.Coords.Y : false;
            Field.Coords.Y <= Field.BOTTOM_Y ? Field.BOTTOM_Y = Field.Coords.Y : false;

            // 2. Получить вссе свободные точки-соседи для текущей позиции игрока (x, y) і вывесті іх

            var neighbors = [];
            var countSuicide = 0;

            if (Field.Data[Field.Coords.X + 1][Field.Coords.Y] != Field.CELL_PLAYER && Field.Data[Field.Coords.X + 1][Field.Coords.Y] != Field.TRACK) { //right
                neighbors.push({
                    x: Field.Coords.X + 1,
                    y: Field.Coords.Y
                });
            } else if (Field.Data[Field.Coords.X + 1][Field.Coords.Y] == Field.TRACK) countSuicide++;

            if (Field.Data[Field.Coords.X - 1][Field.Coords.Y] != Field.CELL_PLAYER && Field.Data[Field.Coords.X - 1][Field.Coords.Y] != Field.TRACK) { //left
                neighbors.push({
                    x: Field.Coords.X - 1,
                    y: Field.Coords.Y
                });
            } else if (Field.Data[Field.Coords.X - 1][Field.Coords.Y] == Field.TRACK) countSuicide++;

            if (Field.Data[Field.Coords.X][Field.Coords.Y + 1] != Field.CELL_PLAYER && Field.Data[Field.Coords.X][Field.Coords.Y + 1] != Field.TRACK) { //top
                neighbors.push({
                    x: Field.Coords.X,
                    y: Field.Coords.Y + 1
                })
            } else if (Field.Data[Field.Coords.X][Field.Coords.Y + 1] == Field.TRACK) countSuicide++;

            if (Field.Data[Field.Coords.X][Field.Coords.Y - 1] != Field.CELL_PLAYER && Field.Data[Field.Coords.X][Field.Coords.Y - 1] != Field.TRACK) { //bottom
                neighbors.push({
                    x: Field.Coords.X,
                    y: Field.Coords.Y - 1
                })
            } else if (Field.Data[Field.Coords.X][Field.Coords.Y - 1] == Field.TRACK) countSuicide++;

            if (Field.Data[Field.Coords.X + 1][Field.Coords.Y + 1] != Field.CELL_PLAYER && Field.Data[Field.Coords.X + 1][Field.Coords.Y + 1] != Field.TRACK) { //bottom-right
                neighbors.push({
                    x: Field.Coords.X + 1,
                    y: Field.Coords.Y + 1
                })
            } else if (Field.Data[Field.Coords.X + 1][Field.Coords.Y + 1] == Field.TRACK) countSuicide++;

            if (Field.Data[Field.Coords.X - 1][Field.Coords.Y + 1] != Field.CELL_PLAYER && Field.Data[Field.Coords.X - 1][Field.Coords.Y + 1] != Field.TRACK) { //bottom-left
                neighbors.push({
                    x: Field.Coords.X - 1,
                    y: Field.Coords.Y + 1
                })
            } else if (Field.Data[Field.Coords.X - 1][Field.Coords.Y - 1] == Field.TRACK) countSuicide++;

            if (Field.Data[Field.Coords.X + 1][Field.Coords.Y - 1] != Field.CELL_PLAYER && Field.Data[Field.Coords.X + 1][Field.Coords.Y - 1] != Field.TRACK) { //top-right
                neighbors.push({
                    x: Field.Coords.X + 1,
                    y: Field.Coords.Y - 1
                })
            } else if (Field.Data[Field.Coords.X + 1][Field.Coords.Y - 1] == Field.TRACK) countSuicide++;

            if (Field.Data[Field.Coords.X - 1][Field.Coords.Y - 1] != Field.CELL_PLAYER && Field.Data[Field.Coords.X - 1][Field.Coords.Y - 1] != Field.TRACK) { //top-left
                neighbors.push({
                    x: Field.Coords.X - 1,
                    y: Field.Coords.Y - 1
                })
            } else if (Field.Data[Field.Coords.X - 1][Field.Coords.Y - 1] == Field.TRACK) countSuicide++;

            // 3. Если свободных точек 6 и менее, для каждой запустить волновой алгоритм
            // 4. Каждую замкнутую область перерисовываем в массиве.

            var neighborsLength = neighbors.length;

            if (neighborsLength <= 5) {
                if (countSuicide >= 4) {
                    clearInterval(Field.cycle);
                    window.location.reload();
                }
                for (var i = 0; i < neighborsLength; i++) {
                    if (Field.Data[neighbors[i].x][neighbors[i].y] == Field.TRACK) {
                        countSuicide++;
                    }

                    Field.PlayerBehavior.BFS(neighbors[i].x, neighbors[i].y);
                }
            }


            if (neighborsLength >= 4) {
                for (var i = Field.Coords.X - 1; i <= Field.Coords.X + 1; i++) {
                    for (var j = Field.Coords.Y - 1; j <= Field.Coords.Y + 1; j++) {
                        if (Field.Data[i][j] == Field.CELL_PLAYER) {
                            Field.countStack++;
                        } 
                        if (Field.Data[i][j] == Field.Bot.CELL_BOT) {
                            Field.countBot++;
                        }
                    }
                }
                if (Field.countStack <= 4) {
                    Field.Data[Field.Coords.X][Field.Coords.Y] = Field.TRACK;
                }
                Field.countStack = 0;
                // Field.PlayerBehavior.trackMove(Field.Coords.X, Field.Coords.Y);
            }
        },

        playerMove: function(e) {

            switch (e.keyCode) {
                case 39 || 68: //Right
                    if (Field.current_move != Field.DIRECTION_LEFT && Field.current_move != Field.DIRECTION_RIGHT) {
                        Field.CurrentDirection = Field.DIRECTION_RIGHT
                    }
                    Field.current_move = Field.DIRECTION_RIGHT;
                    break;
                case 37 || 65: //Left
                    if (Field.current_move != Field.DIRECTION_RIGHT && Field.current_move != Field.DIRECTION_LEFT) {
                        Field.CurrentDirection = Field.DIRECTION_LEFT
                    }
                    Field.current_move = Field.DIRECTION_LEFT;
                    break;
                case 38 || 87: //up
                    if (Field.current_move != Field.DIRECTION_DOWN && Field.current_move != Field.DIRECTION_UP) {
                        Field.CurrentDirection = Field.DIRECTION_UP
                    }
                    Field.current_move = Field.DIRECTION_UP;
                    break;
                case 40 || 83: //down
                    if (Field.current_move != Field.DIRECTION_UP && Field.current_move != Field.DIRECTION_DOWN) {
                        Field.CurrentDirection = Field.DIRECTION_DOWN
                    }
                    Field.current_move = Field.DIRECTION_DOWN;
                    break;
            }
        },


        Stack: [],
        Queue: [],
        BFS: function(x, y) {

            if (Field.PlayerBehavior.checkCell(x + 1, y)) {
                Field.PlayerBehavior.Queue.push({
                    i: x + 1,
                    j: y
                });
            }

            if (Field.PlayerBehavior.checkCell(x, y + 1)) {
                Field.PlayerBehavior.Queue.push({
                    i: x,
                    j: y + 1
                });
            }

            if (Field.PlayerBehavior.checkCell(x + 1, y + 1)) {
                Field.PlayerBehavior.Queue.push({
                    i: x + 1,
                    j: y + 1
                });
            }

            if (Field.PlayerBehavior.checkCell(x - 1, y)) {
                Field.PlayerBehavior.Queue.push({
                    i: x - 1,
                    j: y
                });
            }

            if (Field.PlayerBehavior.checkCell(x, y - 1)) {
                Field.PlayerBehavior.Queue.push({
                    i: x,
                    j: y - 1
                });

            }

            if (Field.PlayerBehavior.checkCell(x - 1, y - 1)) {
                Field.PlayerBehavior.Queue.push({
                    i: x - 1,
                    j: y - 1
                });
            }

            if (Field.PlayerBehavior.checkCell(x - 1, y + 1)) {
                Field.PlayerBehavior.Queue.push({
                    i: x - 1,
                    j: y + 1
                });
            }

            if (Field.PlayerBehavior.checkCell(x + 1, y - 1)) {
                Field.PlayerBehavior.Queue.push({
                    i: x + 1,
                    j: y - 1
                });
            }


            if (Field.PlayerBehavior.Queue.length != 0) {
                for (var z = 0; z < Field.PlayerBehavior.Queue.length; z++) {
                    if (Field.PlayerBehavior.Stack.includes(Field.PlayerBehavior.Queue[z])) {} else Field.PlayerBehavior.Stack.push(Field.PlayerBehavior.Queue[z]);
                }
                var Queue_shift = Field.PlayerBehavior.Queue.shift();
                var shift_i = Number(Queue_shift.i);
                var shift_j = Number(Queue_shift.j);

                return Field.PlayerBehavior.BFS(shift_i, shift_j);

            } else {

                Field.PlayerField(Field.PlayerBehavior.Stack);
                Field.PlayerBehavior.Stack.length = 0;
                return false;

            }

        },



        //находится ли в окамляющем прямоугольнике и и является ли пустой клеткой
        checkCell: function(x, y) {

            if (Field.Data[x][y] != Field.CELL_PLAYER && Field.Data[x][y] != Field.TRACK) {
                if (x > Field.LEFT_X && x < Field.RIGHT_X && y < Field.TOP_Y && y > Field.BOTTOM_Y) {

                    //проверяет помеченная ли ячейка(проверяется по наличию в стеке)
                    for (var z = 0; z < Field.PlayerBehavior.Stack.length; z++) {
                        var Stack_x = Number(Field.PlayerBehavior.Stack[z].i);
                        var Stack_y = Number(Field.PlayerBehavior.Stack[z].j);
                        if (x == Stack_x && y == Stack_y) {
                            // console.log("bad1");
                            return false;
                        }
                    }
                    return true;

                } else if (x == Field.LEFT_X || x == Field.RIGHT_X || y == Field.TOP_Y || y == Field.BOTTOM_Y) {
                    Field.PlayerBehavior.Queue.length = 0;
                    Field.PlayerBehavior.Stack.length = 0;
                    return false;
                }
            }
            return false;
        },


        // trackMove: function(x, y) {
        //     Field.Data[x][y] = Field.TRACK;
        // },


        drawPlayer: function() {
            ctx.fillStyle = "red";
            ctx.arc(12 * 30 + 15, 12 * 30 + 15, 20, 0, 2 * Math.PI); //кружочек игрока. исправить
            ctx.fill();
            ctx.closePath();

        }
    },

    PlayerField: function(Stack) {

        Field.Data[Field.Coords.X][Field.Coords.Y] = Field.CELL_PLAYER;
        for (var x = 0; x < Stack.length; x++) {
            for (var r = Stack[x].i - 1; r <= Stack[x].i + 1; r++) {
                for (var s = Stack[x].j - 1; s <= Stack[x].j + 1; s++) {
                    Field.Data[r][s] = Field.CELL_PLAYER;

                }
            }
        }
    },

    Bot: {
        BOT_COORDS: {
            X: 510,
            Y: 502
        },
        CELL_BOT: 5,
        BOT_AREA: [],

        drawBot: function() {
            Field.cycle_bot = setInterval(Field.Bot.botMove, Field.INTERVAL_DURATION);
        },

        botMove: function() {
            Field.Bot.BOT_COORDS.X -= 1;
            Field.Bot.BOT_AREA.push({
                x: Field.Bot.BOT_COORDS.X,
                y: Field.Bot.BOT_COORDS.Y
            })
            Field.Data[Field.Bot.BOT_COORDS.X][Field.Bot.BOT_COORDS.Y] = Field.Bot.CELL_BOT;
            // console.log(Field.countBot)
            if (Field.countBot >=2) {
                for (var i = 0; i < Field.Bot.BOT_AREA.length; i++) {
                    // Field.Data[Field.Bot.BOT_AREA[i].x][Field.Bot.BOT_AREA[i].y] = Field.CELL_PLAYER;
                    Field.Data[Field.Bot.BOT_AREA[i].x][Field.Bot.BOT_AREA[i].y] = Field.CELL_EMPTY;

                clearInterval(Field.cycle_bot);
                }


            }
        }
    }


}

Field.init();







// for (var f = 0; f < Field.PlayerBehavior.Queue.length; f++) {
//     console.log("Queue")
//     console.log(Field.PlayerBehavior.Queue[f]);
// }

// for (var d = 0; d < Field.PlayerBehavior.Stack.length; d++) {
//     console.log("Stack")
//     console.log(Field.PlayerBehavior.Stack[d]);
// }
// console.log("sss")


// for (var x = 0; x < Stack.length; x++) {
//             for (var s = Stack[x].i - 1; s < Stack[x].i + 1; s++) {
//                 for (var r = Stack[x].j - 1; r < Stack[x].j + 1; r++) {
//                     Field.Data[Stack[x].s][Stack[x].r] = Field.CELL_PLAYER;
//                 }
//             }
//         }