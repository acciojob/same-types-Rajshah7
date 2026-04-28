function isSameType(value1, value2) {

	 let v1 = Number(value1);
	let v2 = Number(value2);

	if(Number.isNaN(v1) === Number.isNaN(v2)){
		return false;
	}

	return typeof v1 === typeof v2;
}

// do not change the code below.
//  let value1 = prompt("Enter Start of the Range."); let value2 = prompt("Enter End Of the Range.");
// alert(isSameType(value1, value2));
