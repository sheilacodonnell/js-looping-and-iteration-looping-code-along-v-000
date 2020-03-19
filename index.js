const names = ['Lisa', 'Kaitlin', 'Jan'];
const occasion =['surprise'];

function writeCards(names, occasion) {
  for (let i = 0; i < names.length; i++){
    var cards = (`Thank you, ${names[i]} for the wonderful ${occasion} gift!`);
  }
  return cards;
}

writeCards(names, occasion);