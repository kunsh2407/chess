class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  async start() {
    if (gameState === 0) {
      this.createBoard();
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
  }

  play() {
    form.hide();
console.log("play")
    Player.getPlayerInfo();
    this.drawBoard();
    if (allPlayers !== undefined) {
      var index = 0;

      var x = 175;
      var y;

      for (var plr in allPlayers) {
        index = index + 1;

        x = x + 200;

        if (index === player.index) {
        }
      }
    }
  }
  createBoard() {
    var k = 0;
    rectMode(CENTER);
    for (var j = 50; j < 450; j += 50) {
      boxes = [];
      for (var i = 50; i < 450; i += 50) {
        var box = new MyObject(i, j, 50, 50);
        boxes.push(box);
      }
      board.push(boxes);
    }
  }
  drawBoard() {
    rectMode(CENTER);
    var k = 0;
    for (var j = 0; j < board.length; j++) {
      for (var i = 0; i < board[j].length; i++) {
        k++;
        if (k % 2 == 0) {
          board[j][i].color = 0;
        } else {
          board[j][i].color =0 ;
        }
        board[j][i].display();
      }
    }
  }
  end() {
    console.log("Game Ended");
  }
}
