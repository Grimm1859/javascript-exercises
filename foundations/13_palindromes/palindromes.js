const reverseString = function(word){
	let arr = word.split('');
	arr = arr.reverse();
	return arr.join('');
}	

const convertWord = function(word){
	const lowercase = word.toLowerCase();
	const noSpace = lowercase.replaceAll(" ","");
	return noSpace.replace(/[^\w\s]|_/g, "");
}

const palindromes = function (word){
	if(convertWord(word) == convertWord(reverseString(word)))
	{
		return true;
	} else {
		return false;
	}
	
};


// Do not edit below this line
module.exports = palindromes;
