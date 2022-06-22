// Переписать if с помощью тернарного оператора

const user = {
  age: 18,
  paid: true,
  blocked: false,
  badUsername: false,
  isAdmin: false
};

function ternaryCheckAccess({ age, paid, blocked, badUsername, isAdmin }) {
  const isAgeValid = user.age >= 18 && user.age <= 35;

  return isAgeValid && (isAdmin || paid && !blocked && !badUsername)
    ? console.log('Welcome!')
    : console.log('Access denied :(');
};

ternaryCheckAccess(user);
