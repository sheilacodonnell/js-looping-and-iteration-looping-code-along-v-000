const names = ["Ada", "Brendan", "Ali"];
const occasion =["birthday"];

function writeCards(names, occasion) {
  for (let i = 0; i < names.length; i++){
    console.log(`Thank you ${names[i]} for the wonderful ${occasion} gift!`);
  }
}

writeCards();