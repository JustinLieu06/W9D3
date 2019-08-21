class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", (e)=>{
      const $square = $(e.currentTarget);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const player = this.game.currentPlayer;
    this.game.playMove(pos);
    $square.addClass(player);
    const $fig = $("<figcaption>");
    if (this.game.winner()){
      // $fig.html("Someone won");
      // this.$el.addClass(`winner-${this.game.winner()}`);
      $fig.html(`You win, ${this.game.winner()}!`);
    }
    // else{
    //   $fig.html("Draw");
    // }
    this.$el.append($fig);
  }

  setupBoard() {
    const $ul = $('<ul>');
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        let $li = $('<li>');
        $li.data("pos", [i,j]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
