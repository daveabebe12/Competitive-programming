let maxProfit = (prices) => {
    let profit = 0;
    let minPrice = Infinity;
    for(let price of prices){
        minPrice = Math.min(price, minPrice);
        profit = Math.max(profit, price - minPrice);
    }
    return profit;
}
let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));
