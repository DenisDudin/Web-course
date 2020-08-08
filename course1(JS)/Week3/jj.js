function getFruitsCost() {
    var cost = 7;
    return function(count) {
        return cost * count;
    };
}
var getCost = getFruitsCost();
var price = getCost(10);

console.log(price);