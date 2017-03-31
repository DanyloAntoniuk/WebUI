function checkPass1(){
	text2 = "Пароль неправильний";
	document.getElementById("p2").innerHTML = text2;
	document.getElementById("pass").style.border = "1px solid red";
	document.getElementById("p2").style.paddingLeft = "160px";
}

function checkPass2(){
	text2 = "Пароль повинен містити цифри і букви";
	document.getElementById("p2").innerHTML = text2;
	document.getElementById("pass").style.border = "1px solid red";
	document.getElementById("p2").style.paddingLeft = "110px";
}

function validate() {
	var x = document.getElementById("login").value;
	var text, text2;
	//мінімум 1 маленька,1 велика буква і 1 цифра
	var regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
	var y = document.getElementById("pass").value;
		
	if (x.length < 3 || x.length > 15) {
		if (y.length < 8){
			checkPass1();
		} else if (!regexp.test(y)){
			checkPass2();
		}
		text = "Логін неправильний";
		document.getElementById("p").innerHTML = text;
		document.getElementById("login").style.border = "1px solid red";
		return false;
	} else if (y.length < 8) {
		checkPass1();
		return false;
	} else if (!regexp.test(y)) {
		checkPass2();
		return false;
	} else {
		return true;
	}
}