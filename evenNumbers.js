// Реализовать цикл перебирающий числа от одного до 20
// и выводящий каждое четное значение на экран, реализация должна
// использовать все 3 вида циклов (отдельная реализация на каждый цикл)

console.log('do/while');
let i = 1;

do {
  if (i % 2 === 0) {
    console.log(i);
  }
  i += 1;
}
while (i <= 20);

console.log('while');
let j = 1;
while (j <= 20) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j += 1;
}

console.log('for');
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
