// Написать функцию для реверсии слова не используя встроенные методы

function reverseWord(str) {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
};

console.log(reverseWord('word'));
