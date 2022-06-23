const human = Object.create({}, {
  fullName: {
    set: function (value) {
      [this.firstName, this.lastName] = value.split(' ');
    },
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  dateOfBirth: {
    set: function (value) { // 'mm.dd.yyyy'
      [_, _, year] = value.split('.');
      this.age = new Date().getFullYear() - Number(year);
    },
  },
});

human.fullName = 'Peter Smith';
console.log(human);
console.log(human.fullName);
human.dateOfBirth = '01.07.1961';
console.log(human);
