//create number form variables; count, sum and average
var numCount = document.getElementById('numCount');
var numSum = document.getElementById('numSum');
var numAvg = document.getElementById('numAvg');
var clicks = 0;

//create base number input function for form onsubmit/onclick
function numVal() {
	var x = document.getElementById('numValue').value;
	document.getElementById("numEnt").textContent = x;
}

//create count function
function onClick() {
 clicks += 1;
 document.getElementById('numCount').textContent = clicks;
}

//create sum function
function mySum(total) {
	document.getElementById('numSum').value=total;
	a = Number(document.getElementById('numSum').value);
}

// //create average function
// function myAvg() {


// }


//save for later...

// var elCount = document.getElementById('numCount');
// elCount.textContent = numCount;

// var elSum = document.getElementById('numSum');
// elSum.textContent = numSum;

// var elAvg = document.getElementById('numAvg');
// elAbv.textContent = numAvg;





