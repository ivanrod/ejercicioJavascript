
function add(){
	
	var number1 = parseInt( document.getElementById("numberInput1").value );
	var number2 = parseInt( document.getElementById("numberInput2").value );
	console.log(number1);
	if (number1 != NaN && number2 != NaN){
	//Are numbers
		document.getElementsByClassName("result")[0].innerHTML = number1+number2;
	}
}
function substract(){
	var number1 = parseInt( document.getElementById("numberInput1").value );
	var number2 = parseInt( document.getElementById("numberInput2").value );
	if (number1 != NaN && number2 != NaN){
	//Are numbers
		document.getElementsByClassName("result")[0].innerHTML = number1-number2;
	}
}
function multiply(){
	var number1 = parseInt( document.getElementById("numberInput1").value );
	var number2 = parseInt( document.getElementById("numberInput2").value );
	if (number1 != NaN && number2 != NaN){
	//Are numbers
	console.log(number1*number2)
		document.getElementsByClassName("result")[0].innerHTML = number1*number2;
	}
}
function division(){
	var number1 = parseInt( document.getElementById("numberInput1").value );
	var number2 = parseInt( document.getElementById("numberInput2").value );
	if (number1 != NaN && number2 != NaN){
	//Are numbers
		document.getElementsByClassName("result")[0].innerHTML = number1/number2;
	}
}