const mynums = [1,2,5,8,9,10]

// const myTotal = mynums.reduce(function (acc,currval) {
//     console.log(`acc:${acc},curval:${currval}`);
//     return acc + currval
// },0)

// const myTotal = mynums.reduce((acc,currval) => (acc+currval),0 )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Js course",
        price: 2090
    },
    {
        itemName : "py course",
        price: 1090
    },   
    {
        itemName : "mobile course",
        price: 9090
    }, 
    {  
        itemName : "Js course",
        price: 1190
    }
]

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price,0)

console.log(priceTopay);