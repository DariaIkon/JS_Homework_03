let client = {};

client.name = prompt('Ваше имя?');
client.phone = prompt('Ваш телефон?');
client.email = prompt('Ваш email?');
client.country = prompt('Ваша страна?');
client.city = prompt('Ваш город?');
client.date = prompt('Введите дату рождения в формате ДД.ММ.ГГГГ')


client.date = new Date(client.date);


if (confirm('Применить скидку?') == true) {
   client.discount =  prompt('Какой размер скидки вы хотите?');
}

let showClient = (object) => {
    console.log('ФИО ' + object.name);
   console.log('Телефон ' + object.phone); 
    console.log('Электронная почта ' + object.email);
    console.log('Страна ' + object.country);
    console.log('Город ' + object.city);
    console.log('Дата рождения ' + object.date);
    if (object.discount >= 0) {
        console.log('Размер скидки ' + object.discount)
    };
    
};

showClient(client);
console.log(showClient);


try {
    showClient();
} catch (e) {
    console.log(e.message);
    console.log('Вызвана функция без параметров');
}


