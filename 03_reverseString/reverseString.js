const reverseString = function(string) {
    let reversedString = '';
    
    string = string.toString(); // convert to string if not already
    
    // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
    reversedString = string.split('').reverse().join('');

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
