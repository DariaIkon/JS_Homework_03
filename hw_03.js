var person1 = {
    name: 'Igor',
    age: 20,
    married: true,
    children: 0
};
var person2 = {
    name: 'Sonya',
    age: 25,
    married: false,
    children: 0
};
var person3 = {
    name: 'Sam',
    age: 35,
    married: true,
    children: 1
};

var names = person1.name + ',' + person2.name + ',' + person3.name;
alert('Имена всех сотрудников - ' + '' + names);

var averageAge = (person1.age + person2.age + person3.age) / 3;
alert('Средний возраст сотрудников ' + averageAge);

var atLeastOneMarried = person1.married || person2.married || person3.married;
alert(atLeastOneMarried);

var allYoungerThanForty = person1.age < 40 && person2.age < 40 && person3.age < 40;
alert(allYoungerThanForty);

var atLeastOneHasNoChildren = person1.children == 0 || person2.children == 0 || person3.children == 0;
alert(atLeastOneHasNoChildren);