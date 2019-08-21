const View = require('./ttt-view'); // require appropriate file
const Game = require('../../ttt_node_solution/game');// require appropriate file

  $(() => {
    // Your code here
    new View(new Game(), $('.ttt'))
  });
