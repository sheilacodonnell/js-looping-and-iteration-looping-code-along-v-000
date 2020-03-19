const names = ['Lisa', 'Kaitlin', 'Jan'];
const occasion =['surprise'];

function writeCards(names, occasion) {
  for (let i = 0; i < names.length; i++){
    console.log(`Thank you, ${names[i]} for the wonderful ${occasion} gift!`);
  }
  return names;
}

writeCards(names, occasion);