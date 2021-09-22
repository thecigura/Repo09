    // Only change code below this line
    var fiveNumbers = [];
    function inverseWhile() {
        var i = 5;
        while(i >= 0) {
            fiveNumbers.push(i);
            i--;
        }
        return fiveNumbers;
    }
    
    // Only change code above this line

inverseWhile();
console.log(inverseWhile());
module.exports = inverseWhile;