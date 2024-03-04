// const fromDollarToYen = function (valueInDollar) {
//    let valueInYen = valueInDollar * 0.0067;
//    return valueInYen;
// }

// const fromYenToPound = function (valueInYen) {
//    let valueInPound = valueInYen * 
// }

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
    "EUR": 1, // eurozone currency
};

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * (1/valueInYen) * 0.87;
    return valueInPound;
}
// let oneDollarIs = {
//     "EUR": 0.92, // eurozone currency
//     "GBP": 0.79, // british pound
//     "JPY": 150.10,  // japan yen
// };

// let oneYenIs = {
//     "USD": 0.0067, // us dollar
//     "GBP": 0.0053, // british pound
//     "EUR": 0.0061, // eurozone currency
// };

// let onePoundIs = {
//     "EUR": 1.17, // eurozone currency
//     "JPY": 190.01, // japan yen
//     "USD": 1.27, // us dollar
// };
const sum = (a,b) => {
    return  a+b
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }