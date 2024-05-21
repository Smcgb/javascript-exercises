const sumAll = function(a, b) {
    
    if (a < 0 || b < 0 || typeof(a) !== 'number' || typeof(b) !== 'number') {
        return 'ERROR';
    };
    
    let summation = 0;
    let min = a;
    let max = b;

    if (a > b) {
        min = b;
        max = a;
    };

    for (i = min; i <= max; i++) {
        summation += i;
    };
    

    return summation;
};

// Do not edit below this line
module.exports = sumAll;
