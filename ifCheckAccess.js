// Реализовать if для проверки доступа

const user = {
  age: 18,
  paid: true,
  blocked: false,
  badUsername: false,
  isAdmin: false
};

function checkAccessIf(user) {
  if (user.isAdmin && user.age >= 18 && user.age <= 35) {
    console.log('Welcome admin!');
  } else if (user.age >= 18 && user.age <= 35 && user.paid && !user.blocked && !user.badUsername) {
    console.log('Welcome user!');
  } else {
    console.log('Access denied :(');
  }
};

checkAccessIf(user);
