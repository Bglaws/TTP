
function titleCaseEdit(title) {
	//Split title into array of strings	
	let newTitle = title.split(" ");

	for (let i = 0; i < newTitle.length; i++) {
				
		newTitle[i] = newTitle[i][0].toUpperCase() + newTitle[i].substr(1);		
	}
	return newTitle.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;
