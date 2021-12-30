function countOfAllIndexMatchingNumbers(nums) {
	let tally = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == i) {
			tally++;
		}
	}
	return tally;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
