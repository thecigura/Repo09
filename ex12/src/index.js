function switchCaseSequential(num) {
    // Only change code below this line
    var answer = "";
    switch(num) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 4:
        case 5:
        case 6:
            answer = "High";
            break;
    }
    
    // Only change code above this line
    return answer;
}
switchCaseSequential(1);
console.log(switchCaseSequential(2));
module.exports = switchCaseSequential;