function textIntoObject(str) {
  const words = str.split(' ');

  return words.map((word) => {
    const isCapitalized = word === word.toUpperCase();

    return {
      word: word,
      length: word.length,
      isCapitalized,
    }

  });
};

console.log(textIntoObject('Hello world'));
console.log(textIntoObject('HELLO WORLD'));
