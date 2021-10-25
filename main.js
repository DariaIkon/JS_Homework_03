
var students = [
    {
        firstName: 'Александр',
        lastName: 'Иванчук',
        group: 'T993',
        marks: [2, 4, 4, 5, 2, 3, 3, 4, 5, 3, 2, 4, 3]
    },
    {
        firstName: 'Анатолий',
        lastName: 'Косанов',
        group: 'T993',
        marks: [3, 4, 5, 4, 4, 1, 4, 3, 4, 4, 4, 3, 5]
    },
    {
        firstName: 'Руслан',
        lastName: 'Столбов',
        group: 'T993',
        marks: [3, 3, 5, 4, 4, 1, 4, 4, 3, 5, 4, 4, 4]
    },
    {
        firstName: 'Иван',
        lastName: 'Пробкин',
        group: 'T994',
        marks: [2, 3, 2, 1, 2, 3, 2, 3, 3, 3, 4, 1, 1]
    },
    {
        firstName: 'Владислав',
        lastName: 'Голубев',
        group: 'T994',
        marks: [1, 2, 2, 2, 3, 2, 2, 3, 5, 1, 2, 3, 2]
    }

]

// task_1
function fullName(object) {
    var firstNameStudent = object.firstName;
    var lastNameStudent = object.lastName;
    return firstNameStudent + ' ' + lastNameStudent;
}
// console.log(fullName(students[0]));

// // task_2

function getAverageMark(object) {
    var sum = 0;
    for (var i = 0; i < object.length; i++){
        
        sum += object[i];
               
    }
    var result = (sum / object.length).toFixed(1);
    return result;
}

// console.log(getAverageMark(students[0].marks));

// task_3

function processStudents(object) {
    // for (var i of object) {
    //     return message = 'Студент ' + fullName(i) + ' имеет средний балл ' + getAverageMark(i) + ' и учится в группе ' + i.group;
    // }

    object.forEach(function (item) {
        
        var message = 'Студент ' + fullName(item) + ' имеет средний балл ' + getAverageMark(item.marks) + ' и учится в группе ' + item.group;
        

        console.log(message);
        
    } );

    
}
// task_4
console.log(processStudents(students));