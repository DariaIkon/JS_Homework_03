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
var consumption = resultCarEngine;
    
var resultCarEngine = (car.engine >= 3.0) ? alert('Прожорливый автомобиль') : alert('Экономичный автомобиль');

// task4
var russianColor = car.color;
switch (russianColor) {
    case 'black':
        alert('черный')
        break;
     case 'silver':
        alert('серебристый')
        break;
    case 'red':
        alert('красный')
        break;
    case 'white':
        alert('белый')
        break;
    case 'gray':
        alert('серый')
        break;
    case 'blue':
        alert('синий')
        break;
    default:
        alert('Невозможно определить цвет автомобиля')
        break;
    
}
