function countOfAllBooleans(arr) {	
	let tally = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] == "boolean") {
			tally++;
		}
	}
	return tally;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
