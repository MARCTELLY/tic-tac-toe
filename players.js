class Player {
  constructor(pseudo, mark) {
    this.pseudo = pseudo;
    this.mark = mark;
    this.score = 0;
  }

  // getter
  get information() {
    return this.pseudo + " has " + this.score + " points";
  }
}

export { Player };
