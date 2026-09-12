const fibonacci = function(num) {
	let arr = [0,1];
	for (let i = 0; i < 30; i++) {
		arr.push(arr[arr.length-1] + arr[arr.length-2])
	}
	if (num < 0) {
		return "OOPS";
	} else {
		return arr[num];
	}
};

// Do not edit below this line
module.exports = fibonacci;
