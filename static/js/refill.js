function calculate() {
	var amtCard = document.rcal.amountleft.value;
	var nRides = document.rcal.numrides.value;

	var x = (50 * nRides - 20 * amtCard) / 21;

	if ( x < 5 ) {
		x = nRides * 2.50 - amtCard;
	}

	if ( x < 0 ) {
		x = 0.00 ;
	}

	var xToNickle = Math.ceil(x*20) / 20;

	var refill = document.getElementById("refill");

	refill.innerHTML = xToNickle.toFixed(2);
}