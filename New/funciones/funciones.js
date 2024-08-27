function calculateDiscountedPrice (price,discountPercentage){
    const discount = (price * discountPercentage) /100;
    priceWithDiscount = price - discount;
    return priceWithDiscount;
}

const originalPrice = 100
const discountP = 10
const finalprice = calculateDiscountedPrice(originalPrice,discountP)

console.log(finalprice);