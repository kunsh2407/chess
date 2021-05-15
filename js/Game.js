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
  getTurn() {
    var gameStateRef = database.ref("playerTurn");
    gameStateRef.on("value", function (data) {
     playerTurn = data.val();
    });
    
  }
  updateTurn(turn) {
    database.ref("/").update({
      playerTurn: turn,
    });}
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
    var k1 = new King(375, 375, white);
    var k2 = new King(375, 375, black);
    players = [
      [
        p11,
        p12,
        p13,
        p14,
        p15,
        p16,
        p17,
        p18,
        r11,
        b11,
        kn11,
        q1,
        k1,
        kn12,
        b12,
        r12,
      ],
      [
        p21,
        p22,
        p23,
        p24,
        p25,
        p26,
        p27,
        p28,
        r21,
        b21,
        kn21,
        q2,
        k2,
        kn22,
        b22,
        r22,
      ],
    
    ];
    this.getTurn()
  }

  play() {
    form.hide();
    console.log("play");
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
    for (var j = 75; j < 675; j += 75) {
      boxes = [];
      for (var i = 75; i < 675; i += 75) {
        var box = new MyObject(i, j, 75, 75);
        boxes.push(box);
      }
      board.push(boxes);
    }
  }
  drawBoard() {
    rectMode(CENTER);
    var k = 0;
    for (var j = 0; j < board.length; j++) {
      k++;
      for (var i = 0; i < board[j].length; i++) {
        k++;
        if (k % 2 == 0) {
          board[j][i].color = 64;
        } else {
          board[j][i].color = 192;
        }
        board[j][i].display();
      }
    }
  }
  end() {
    console.log("Game Ended");
  }
}
