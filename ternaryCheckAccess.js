// Переписать if с помощью тернарного оператора

const user = {
  age: 18,
  paid: true,
  blocked: false,
  badUsername: false,
  isAdmin: false
};

function ternaryCheckAccess(user) {
  user.isAdmin && user.age >= 18 && user.age <= 35
    ? console.log('Welcome admin!')
    : user.age >= 18 && user.age <= 35 && user.paid && !user.blocked && !user.badUsername
      ? console.log('Welcome user!')
      : console.log('Access denied :(');
};

ternaryCheckAccess(user);
