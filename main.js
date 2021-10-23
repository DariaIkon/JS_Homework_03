// task_1

var iphone = {
    name: 'iphone',
    model: 12,
    color: 'silver',
    year: 2020,
    price: 900
}
var sony = {
    name: 'Sony',
    model: 'Xperia 1',
    color: 'green',
    year: 2019,
    price: 1600
}
var huawei = {
    name: 'huawei',
    model: 'nowa-8-i',
    color: 'pink',
    year: 2018,
    price: 700
}
var samsung = {
    name: 'Samsung',
    model: 'Galaxy S13',
    color: 'black',
    year: 2021,
    price: 1300
}
var nokia = {
    name: 'Xiaomi',
    model: 'Soft X',
    color: 'white',
    year: 2020,
    price: 200
}

function showModel(object) {
    return object.name + ' ' + object.model + ' ' + object.year
}

// alert(showModel(iphone));
// alert(showModel(samsung));
// alert(showModel(nokia));

// // task_2

function getColor(object) {
    switch (object.color) {
        case 'white':
         alert('белый')
        break;
    case 'silver':
         alert('серый')
        break;
    case 'black':
         alert('черный')
        break;
    default:
         alert('Невозможно определить цвет автомобиля')
        break;   
    }
    return;
}
// getColor(iphone);
// getColor(samsung);
// getColor(nokia);


// // task_3 

function canBuy(object, cash) {
    if (cash >= 1300) {
    alert(object.name + ' ' + object.model + ' ' + 'у вас достаточно средств для совершения покупки!')
    } else {
        alert(object.name + ' ' + object.model + ' ' + 'у вас не достаточно средств для совершения покупки!')
}
}
// canBuy(iphone, iphone.price);
// canBuy(samsung, samsung.price);
// canBuy(nokia, nokia.price);
// canBuy(huawei, huawei.price);
// canBuy(sony, sony.price);


// task_4

function showInfo(object) {
    var colorPhone = getColor(object);
    return object.name + ' ' + object.model + ' ' + colorPhone;
}

alert(showInfo(iphone));
alert(showInfo(samsung));
alert(showInfo(nokia));