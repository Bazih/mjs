export const getRandomColor = () => {
  const number = Math.round(Math.random());

  return number ? 'b' : 'w';
};
