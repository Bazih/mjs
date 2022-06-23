const employees = [
    {
     firstName: 'Alex',
     lastName: 'Smith',
     age: 54,
     salary: 10000,
     position: 'Architect'
    },
    {
     firstName: 'Gustav',
     lastName: 'Andersen',
     age: 31,
     salary: 5000,
     position: 'Software engineer'
    },
    {
     firstName: 'Liz',
     lastName: 'Taylor',
     age: 20,
     salary: 7000,
     position: 'Manager'
    }
];

function averageSalary(employees) {
  const sum = employees.reduce((acc, empl) => {
    return acc + empl.salary;
  }, 0);

  return sum / employees.length;
};

function sortSalaryAsc(employees) {
  return employees.sort((a, b) => a.salary - b.salary);
};

function salaryAndAge(employess) {
  return employess.filter(({ salary, age }) => salary > 4500 && age > 25);
};

console.log(averageSalary(employees));
console.log(sortSalaryAsc(employees));
console.log(salaryAndAge(employees));
