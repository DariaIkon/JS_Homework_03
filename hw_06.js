// task_1

var mathClassPersons = [
    {
    name: 'Алексей Попов',
    class: 7,
    marks: [2, 4, 3, 4, 2, 3, 3, 5, 4, 1]
    },
    {
    name: 'Иван Петросян',
    class: 6,
    marks: [3, 2, 4, 4, 3, 5, 5, 5]
    },
    {
    name: 'Василий Караванов',
    class: 8,
    marks: [1, 2, 2, 1, 4, 3, 3, 2]
    }
]

console.log(mathClassPersons[0]);
console.log(mathClassPersons[1]);
console.log(mathClassPersons[2]);

// task_2

mathClassPersons.push({
    
    name: 'Виталий Абрамов',
    class: 7,
    marks: [3, 3, 2, 3, 4, 3]
    
})

console.log(mathClassPersons[3]);

// task_3

mathClassPersons[2].marks.push(5);
console.log(mathClassPersons[2].marks);

// task_4
mathClassPersons[0].marks.pop();
console.log(mathClassPersons[0].marks);

// task_5
var rating = mathClassPersons[2].marks.length;
var message = 'У Василия ' + rating + ' оценок';
console.log(message);

// task_6
var nameSecondPerson = mathClassPersons[1].name.toUpperCase();
var classSecondPerson = mathClassPersons[1].class;
var messageForSecondPerson = nameSecondPerson + ' сейчас в ' + classSecondPerson + ' классе';
console.log(messageForSecondPerson);