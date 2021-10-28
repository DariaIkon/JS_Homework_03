let client = {};

client.name = prompt('Ваше имя?');
client.phone = prompt('Ваш телефон?');
client.email = prompt('Ваш email?');
client.country = prompt('Ваша страна?');
client.city = prompt('Ваш город?');
client.date = prompt('Введите дату рождения в формате ДД.ММ.ГГГГ')


var date = new Date(client.date);


if (confirm('Применить скидку?') == true) {
   let discount =  prompt('Какой размер скидки вы хотите?');

    client.discount = discount;
}

const ggg = {
    name: 'Darya',
    phone: '+79657074484',
    email: 'ikonnikova.daria@gmail.com',
    country: 'Russia',
    city: 'Kaluga',
    date: '08.02.1990'
}

let showClient = ((object) => {
    'ФИО ' + object.name;
    'Телефон ' + object.phone;
    'Электронная почта ' + object.email;
    'Страна ' + object.country;
    'Город' + object.city;
    'Дата рождения ' + object.date;
    'Размер скидки ' + object.discount;
}, 2000);
showClient(ggg);
console.log(showClient);


try {
    showClient();
} catch (e) {
    console.log('Вызвана функция без параметров');
}

// console.log(client);
