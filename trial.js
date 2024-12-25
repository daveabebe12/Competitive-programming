var maxProfit = (prices) =>{
    let profit = 0;
    for(var i = 0; i < prices.length; i++){
        let buy = i;
        let sell = Math.max(prices.splice(i + 1, prices.length + 1))
        profit = sell - buy;
    }
    if(profit > 0){
        return profit;
    }else{
        return 0;
    }
}
prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));