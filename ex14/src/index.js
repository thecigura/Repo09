// Only change code below this line
    var evenNumbers = [];
    var evenInverseNumbers = [];

    function myForLoop1() {
        for(var i = 0; i <= 8; i +=2) {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
    
    function myForLoop2() {
        for(var i = 8; i >= 0; i -= 2) {
            evenInverseNumbers.push(i);
        }
        return evenInverseNumbers;
    }

myForLoop1();
myForLoop2();
    
console.log(evenNumbers);
console.log(evenInverseNumbers);
// Only change code above this line

module.exports = {
    myForLoop1,
    myForLoop2
};