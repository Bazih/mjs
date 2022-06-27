const Human = function () {
  this.name = 'John';
  this.lastName = 'Smith';
  this.location = 'Russia';
  this.phoneNumber = '+1234567890';
  this.eat = function() {};
  this.sleep = function() {};
  this.callFriend = function() {};
};

const Employee = function () {
  this.baseSalary = '10000';
  this.salaryCurrency = '$';
  this.organizeMeeting = function () {};
  this.retire = function() {};
};

Employee.prototype = new Human();

const CurrentEmployee = function () {
  this.position = 'Senior engineer';
  this.department = 'IT';
  this.startDate = '10.10.1990';
  this.writeReport = function() {};
  this.startVacation = function() {};
};

CurrentEmployee.prototype = new Employee();

const ExEmployee = function () {
  this.endDate = '10.10.2000';
};

ExEmployee.prototype = new Employee();
