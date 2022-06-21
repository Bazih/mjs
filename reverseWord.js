// Написать функцию для реверсии слова не используя встроенные методы

function reverseWord(str) {
  const arr = [...str];
  let result = '';

  for (i = arr.length - 1; i >= 0; i--) {
    result += arr[i];
  }

  return result;
};

console.log(reverseWord('word'));
