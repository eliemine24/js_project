let myCards = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, "special"]

const drawCard = function() {
  const indice = Math.floor(Math.random() * myCards.length);
  console.log(indice);
  return myCards[indice];
};

console.log(drawCard());
console.log(myCards)