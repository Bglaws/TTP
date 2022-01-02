function sumOfMinimumAndMaximum(nums) {
	let min = 10000;
	let max = -10000;
	
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < min) {
			min = nums[i];
		}
		else if (nums[i] > max) {
			max = nums [i];
		}
	} 
	return max + min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
