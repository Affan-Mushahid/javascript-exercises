const removeFromArray = function(arr = [], ...toRemove) {
    for(val of toRemove) {
        while (arr.includes(val)) {
            arr.splice(arr.findIndex(i => i === val), 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
