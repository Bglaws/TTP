class MySolution {

	countDownSum(num) {
		if (this.num == 1) {
			return 1;
		}
		return this.num + this.countDownSum(this.num - 1);
  	}
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
