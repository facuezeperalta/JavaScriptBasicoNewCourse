function calculateDiscountedPrice (price,discountPercentage){
    const discount = (price * discountPercentage)/100;
    const priceWithDiscount = price - discount;
    return priceWithDiscount;
}


const originalPrice = 100;
const discount = 20;
const finalPrice = calculateDiscountedPrice(originalPrice,discount);

console.log("Original Price: " + originalPrice);
console.log("Discount: "+discount);
console.log("Price with discount: " + finalPrice);

