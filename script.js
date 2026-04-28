function isSameType(value1, value2) {

  let v1 = (value1 * 0) === 0 ? Number(value1) : value1;
  let v2 = (value2 * 0) === 0 ? Number(value2) : value2;
	
  if((typeof v1) === (typeof v2)){
	  return true;
  }else{
	  return false;
  }
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
