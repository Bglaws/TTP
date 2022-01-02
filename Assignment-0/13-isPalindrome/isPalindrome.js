function isPalindrome(word) {
	
	str = word.toLowerCase().replace(' ', '');
	let len = str.length;

 	for (let i = 0; i < len / 2; i++) {
   		if (str[i] !== str[len - 1 - i]) {
       			return false;
		}
	}
	return true;
}

// Do not edit this line;
module.exports = isPalindrome;
