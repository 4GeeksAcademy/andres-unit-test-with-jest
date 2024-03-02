//euro to dollars

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


//dollar to yens
test ("One dollar should be 150.10 yen", function () {
    const { fromDollarToYen } = require('./app.js');
    const expected = 150.10 * 2;
    expect(fromDollarToYen(150.10)).toBe(300.2);
})

//yen to pounds
test ("One yen should be 0.0053 pound", function () {
    const { fromYenToPound } = require('./app.js');
    const expected = 0.0053 * 100;
    expect(fromYenToPound(0.0053)).toBe(0.53)
})