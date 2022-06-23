function textIntoObject(str) {
  const isCapitalized = str === str.toUpperCase();

  return {
    word: str,
    length: str.length,
    isCapitalized,
  }
};

console.log(textIntoObject('smth'));
console.log(textIntoObject('SMTH'));
