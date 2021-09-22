// Only change code below this line

function checkSign(num) {
   return (num === 0) ? "zero"
   : (num > 0) ? "positive"
   : "negative";
}

checkSign();

console.log(checkSign(-1));
// Only change code above this line

module.exports = checkSign;