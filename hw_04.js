var car = {
    name: 'Mercedes',
    model: 'GL450',
    engine: 4.0,
    year: 2015,
    color: 'black',
    hp: 300,
}

// task1
if (car.name === 'Mercedes' && car.model === 'GL450') {
    alert('Мой любимый мерседес!')
} else {
    alert('Это -' + car.name + ' ' + car.model)
}

// task2
var carYear = 2021 - car.year;

if (carYear == 0) {
    alert('Новый автомобиль');
} else if (carYear <= 2) {
    alert('Свежий автомобиль');
} else if (carYear > 2) {
    alert('Лет этому авто:' + ' ' + carYear);
} else {
    alert('Советую выбрать другой автомобиль');
}

// task3
var consumption = (car.engine >= 3.0) ? 'Прожорливый автомобиль' : 'Экономичный автомобиль';
alert(consumption);

// task4

var russianColor = '';
switch (car.color) {
    case 'black':
        russianColor = 'черный'
        break;
     case 'silver':
        russianColor = 'серебристый'
        break;
    case 'red':
        russianColor = 'красный'
        break;
    case 'white':
        russianColor = 'белый'
        break;
    case 'gray':
        russianColor = 'серый'
        break;
    case 'blue':
        russianColor = 'синий'
        break;
    default:
        russianColor = 'Невозможно определить цвет автомобиля'
        break;   
}
alert(russianColor);