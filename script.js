function add(){
	console.log(number1);
	var number1 = document.getElementById("numberInput1").value();
	var number2 = document.getElementById("numberInput2").value();
	if (number1 != NaN && number2 != NaN){
	//Are numbers
		document.getElementsByClassName("result")[0].innerHTML = number1+number2;
	}
}
function substract(){
	var number1 = document.getElementById("numberInput1").value();
	var number2 = document.getElementById("numberInput2").value();
	if (number1 != NaN && number2 != NaN){
	//Are numbers
		document.getElementsByClassName("result")[0].innerHTML = number1-number2;
	}
}
function multiply(){
	var number1 = parseInt(document.getElementById("numberInput1").value());
	var number2 = parseInt(document.getElementById("numberInput2").value());
	if (number1 != NaN && number2 != NaN){
	//Are numbers
		document.getElementsById("result")[0].innerHTML = number1*number2;
	}
}
function division(){
	var number1 = parseInt(document.getElementById("numberInput1").value());
	var number2 = parseInt(document.getElementById("numberInput2").value());
	if (number1 != NaN && number2 != NaN){
	//Are numbers
		document.getElementsById("result")[0].innerHTML = number1/number2;
	}
}