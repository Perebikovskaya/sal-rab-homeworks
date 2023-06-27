function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная сумма для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    // создайте переменную shippingSum

    let shippingSum;
    if(productsSum == 0 && productsSum >= freeShippingMinSum){
        shippingSum = 0;
    }


    // если productsSum равно 0,
    // то shippingSum присвоить значение 0
    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0
    if (productsSum > 0 && productsSum < freeShippingMinSum) {
        shippingSum = shippingPrice
    }
    // если productsSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная сумма для скидки
    let discountPart = discount; // величина скидки в процентах
}