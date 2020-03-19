const names = [ 'Lisa', 'Kaitlin', 'Jan' ];
const occasion =['surprise'];
const cards = [];

function writeCards(names, occasion) {
  for (let i = 0; i < names.length; i++){
    cards.push(`Thank you, ${names[i]} for the wonderful ${names[3]} gift!`);
  }
  return cards;
}