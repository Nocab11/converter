// Объект с курсами 3-х валют
const rates = {};

// Элементы для отображения курса валют
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');

// Элементы формы, ввод суммы, выбор валюты, поле с результатом
const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');

// Функция получения курса валют и отображения их на странице
async function getCurrencies() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();


    rates.USD = data.Valute.USD;

    rates.EUR = data.Valute.EUR;

    rates.GBP = data.Valute.GBP;

    console.log(rates)

    elementUSD.textContent = rates.USD.Value.toFixed(2);

    elementEUR.textContent = rates.EUR.Value.toFixed(2);

    elementGBP.textContent = rates.GBP.Value.toFixed(2);

    // Цвет для информера USD
    if (rates.USD.Value > rates.USD.Previous) {
        elementUSD.classList.add('top')
    } else {
        elementUSD.classList.add('bottom')
    }

    // Цвет для информера EUR
    if (rates.EUR.Value > rates.EUR.Previous) {
        elementEUR.classList.add('top')
    } else {
        elementEUR.classList.add('bottom')
    }

    // Цвет для информера GBP
    if (rates.GBP.Value > rates.GBP.Previous) {
        elementGBP.classList.add('top')
    } else {
        elementGBP.classList.add('bottom')
    }
}

getCurrencies()

// Функция конвертации
function convertValue() {
    result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2);
}

// Изменение текстового поля и поля со списком
input.oninput = convertValue;
select.oninput = convertValue;