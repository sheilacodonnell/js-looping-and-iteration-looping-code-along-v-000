const names = [ 'Lisa', 'Kaitlin', 'Jan' ];
const occasion = 'surprise';
const cards = [];

function writeCards(names, occasion) {
  for (let i = 0; i < names.length; i++){
    cards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
  }
  return cards;
}


function countDown() {
  let number = 10;
  while (number < 10 && number > 0) {
    console.log(number);
    number--
  }
  countDown(number)
}