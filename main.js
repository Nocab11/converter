const rates = {};

const elementUSD = document.querySelector('[data-value="USD"]');

const elementEUR = document.querySelector('[data-value="EUR"]');

const elementGBP = document.querySelector('[data-value="GBP"]');

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


}

getCurrencies()