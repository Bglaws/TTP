function fizzBuzz(start, end) {
	let arr = []
	arr.length = end - start + 1;
	for (let i = start; i < arr.length; i++) {
		if(i % 15 == 0) {
			arr[i] = "FizzBuzz";
		}
		else if (i % 3 == 0) {
			arr[i] = "Fizz";
		}
		else if (i % 5 == 0) {
			arr[i] = "Buzz";
		}
		else arr[i] = i;
	}
	return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;
