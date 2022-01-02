function frequencyCounter(word) {
	let obj = {};
	for (let i = 0; i < string.length; i++) {
		let character = string.charAt(i);
		if (obj[character]) {
			obj[character]++;
		} else {
			obj[character] = 1;
		}
	}
	return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;
