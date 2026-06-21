/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    // Find maximum cost
    let maxCost = 0;
    for (let cost of costs) {
        maxCost = Math.max(maxCost, cost);
    }

    // Counting sort array
    let count = new Array(maxCost + 1).fill(0);

    // Count frequency of each price
    for (let cost of costs) {
        count[cost]++;
    }

    let bars = 0;

    // Buy cheaper ice creams first
    for (let price = 1; price <= maxCost; price++) {
        while (count[price] > 0 && coins >= price) {
            coins -= price;
            bars++;
            count[price]--;
        }

        // Cannot afford current price, higher prices are impossible too
        if (coins < price) {
            break;
        }
    }

    return bars;
};