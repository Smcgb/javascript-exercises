const removeFromArray = function(array, num) {
    
    let index = array.indexOf(num);

    if (index > -1) {
        array.splice(index, 1); 
      };

    return array;

};

console.log(removeFromArray([1,2,3,4], 3))

// Do not edit below this line
module.exports = removeFromArray;
