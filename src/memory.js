class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cardsArray) {
    if (!cardsArray) {
      return undefined
    }
    const mixedCards = []
    for (let i = cardsArray.length; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let a = cardsArray.splice(j,1)
      a = a[0]
      mixedCards.push(a)
    }
    return mixedCards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true;
    }
    return false;
  }
}
