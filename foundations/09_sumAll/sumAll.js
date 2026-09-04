function sumAll(no1,no2){
    if(!isValid(no1) || !isValid(no2)){
        return 'ERROR'
    } else {
    let arr = [no1,no2].sort((a,b) => a - b)
    let sum = 0;
    for (let i = arr[0];  i <= arr[1] ; i++){
        sum = sum + i
    }
    return sum;
}
};

function isValid(num){
    return Number.isInteger(num) && num > 0;
}
// Do not edit below this line
module.exports = sumAll;
