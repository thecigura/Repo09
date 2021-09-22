// Only change code below this line
var myNumbers = [];

function myDoWhile() {
    var i = 0;
    do {
        myNumbers.push(i);
        i++;
    } while(i <= 9);
    return myNumbers;
}



myDoWhile();


console.log(myNumbers);
// Only change code above this line

module.exports = myDoWhile;