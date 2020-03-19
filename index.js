const names = [ 'Lisa', 'Kaitlin', 'Jan' ];
const occasion = 'surprise';
const cards = [];

function writeCards(names, occasion) {
  for (let i = 0; i < names.length; i++){
    cards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
  }
  return cards;
}

const number = 10

function countDown(number) {
  for (let i = 0); i < number.length; i++){
    console.log(`${number[i]}`)
  }
}