let myCards = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, "special"]

const drawCard = function() {
  return myCards[Math.floor(Math.random() * myCards.length)];
};

console.log(drawCard());