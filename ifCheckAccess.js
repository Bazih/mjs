// Реализовать if для проверки доступа

const user = {
  age: 18,
  paid: true,
  blocked: false,
  badUsername: false,
  isAdmin: false
};

function checkAccess({ age, paid, blocked, badUsername, isAdmin }) {
  const isAgeValid = user.age >= 18 && user.age <= 35;

  if (isAgeValid && (isAdmin || paid && !blocked && !badUsername)) {
    console.log('Welcome!');
  } else {
    console.log('Access denied :(');
  }
};

checkAccess(user);
