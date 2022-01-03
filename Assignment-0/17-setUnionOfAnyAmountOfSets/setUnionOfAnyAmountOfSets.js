function setUnionOfAnyAmountOfSets(...args) {
	let union = new Set(); 
	for (const set of args) {
		for (const elem of set) {
			union.add(elem);
		}
	}
	return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
