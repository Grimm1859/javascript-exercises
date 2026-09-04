const removeFromArray = function(arr, ...args) {
    for (const item of args){
        for (let i = 0 ; i < arr.length ; i ++){
            if (arr.indexOf(item) == -1){
                continue;
            } else {
                arr.splice(arr.indexOf(item),1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
