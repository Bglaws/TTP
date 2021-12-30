function countOfAllNumbersSmallerThanTarget(nums, target) {
	let tally = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < target) {
			tally++;
		}
	}
	return tally;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
