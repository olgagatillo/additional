function verify(){
	console.log("a, b, c, d")

	let a = parseFloat(elementA.innerText);
	let b = parseFloat(elementB.innerText);
	let c = parseFloat(elementC.innerText);
	let d = parseFloat(elementC.innerText);
	console.log(a, b, c, d)

	let low1, high1 
	if (a < b) {
		low1 = a;
		high1 = b;
	}

	else{
		low1 = b;
		high1 = a;
	}

	let low2, high2
	if (c < d){
		low2 = c;
		high2 = d;
	}

	else{
		low2 = d;
		high2 = c;
	}


	if (low1 <= low2 && high1 <= high2 && low1 > 0 && low2 > 0 && high1 > 0 && high2 > 0) {
		result = "Прямоугольник может быть вписан"
		document.getElementById("result").innerText = result;
	}

	else{
		result = "Прямоугольник не может быть вписан"
		document.getElementById("result").innerText = result;
	}
}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
