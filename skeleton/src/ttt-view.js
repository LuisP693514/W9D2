class View {
  constructor(game, el) {
    this.game = game;

    this.el = el;
    console.log(this.el);
    // debugger
    this.setupBoard();
  }

  setupBoard() {
    let ul = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        
        const li = document.createElement("li");
        li.dataset.pos = JSON.stringify([i, j]);
        li.style.display = "flex";
        li.style.width = 300;
        li.style.flexWrap = "wrap";
        
        if (JSON.parse(li.dataset.pos)[0] === 0){

        }
        ul.appendChild(li);
        
      }
    }

    this.el.append(ul);
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
