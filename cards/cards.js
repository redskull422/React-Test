
  function getFirstOneIndex(cards) {
  return cards.findIndex(item => item === '1');
}
function getNearIndexes(cards, index) {
  if (index === 0) {
    return [1];
  }
  if (index === cards.length - 1) {
    return [cards.length - 2];
  }
  return [index - 1, index + 1];
}
function toggleCards(cards, Indexes) {
  Indexes.forEach(index => {
    if (cards[index] === '0') {
      cards[index] = '1';
    } else if (cards[index] === '1') {
      cards[index] = '0';
    }
  });
}
export default function fn(cards) {
  const cardsArray = cards.split('');
  const sequenceOrder = [];
  for (let i = 0; i < cardsArray.length; i++) {
    const deletedCardIdx = getFirstOneIndex(cardsArray);
    cardsArray[deletedCardIdx] = '.';
    const nearIndexes = getNearIndexes(cardsArray, deletedCardIdx);
    toggleCards(cardsArray, nearIndexes);
    sequenceOrder.push(deletedCardIdx);
  }
  if (cardsArray.every(item => item === '.')) {
    return sequenceOrder;
  } else {
    return false;
  }
}
