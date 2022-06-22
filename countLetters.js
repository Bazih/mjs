// Написать функцию для подсчета количества букв в слове

function countLetters(str) {
  return str.trim().replace(/[0-9]/g, '').length;
};

console.log(countLetters('  Hell123o ') === 5);
