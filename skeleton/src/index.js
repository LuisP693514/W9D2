const View = require("./ttt-view.js");// require appropriate file
const Game = require("../ttt_node/game.js");// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const game = new Game();
  const boardImage = document.querySelector(".ttt");
  new View(game, boardImage);



});
