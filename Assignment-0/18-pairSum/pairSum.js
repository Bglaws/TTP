function pairSum(nums, target) {
	let hash = {}
	if (nums.length < 2) {
		throw 'length of nums is less than 2';
	}	
	for (let i in nums) {
		let addend = target - nums[i];

		if (addend in hash) {
			return true;
		}
	hash[nums[i]] = i;
	}
	return false;
}

// Do not edit this line;
module.exports = pairSum;
