function sumOfNumsWithinARange(nums, start, end) {
	let tally = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == start) {
			tally++;
			i++;
			for (let j = i; j < nums.length; j++) {
				if (nums[j] == end) {
					tally++
					break;
				}
				tally++;
			}
			break;
		}
	}	

	return tally;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;

// for (let j = i; nums[j] != end || j < nums.length; j++) {
// 	tally++;
// }