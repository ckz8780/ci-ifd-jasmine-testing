// Tested with the New Calculator specs in calcSpec.js
Calculator = function() {
    this.value = 0;
};

Calculator.prototype.add = function(number) {
    if(typeof(number) == 'number'){
        this.value += number;
    } else {
        alert('Argument must be a number');
    }
};

//Tested with the Calculator specs in calcSpec.js
function addition(numOne, numTwo) {
    if(typeof(numOne) == 'number' && typeof(numTwo) == 'number'){
        return numOne + numTwo;
    } else {
        alert('Both arguments must be numbers');
    }
}