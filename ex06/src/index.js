// Only change code below this line
function comparasionToEqual(a) {
    if (a > 20) {
        return "More than 20";
    }
    if (a >= 10) {
        return "10 or over";
    }
    if (a < 10) {
        return "Less than 10";
    }
    if (a < 5) {
        return "Less than 5";
    }
    
}
comparasionToEqual(21);
console.log(comparasionToEqual(0));
console.log(comparasionToEqual(5));
console.log(comparasionToEqual(17));
console.log(comparasionToEqual(21));


// Only change code above this line
module.exports = comparasionToEqual;