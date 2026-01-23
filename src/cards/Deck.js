export class Deck {
  constructor(cards = []) {
    this.cards = cards;
    this.discardPile = [];
  }

  shuffle() {}
  draw() {}
  discard(cards) {}
  reshuffleIfNeeded() {}
}