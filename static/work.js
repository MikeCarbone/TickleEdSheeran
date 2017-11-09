var happyEd = document.getElementById('smiles');
var sadEd = document.getElementById('sad');
var timeout;
var giggles = document.getElementById('giggles');


function beHappy(){
	clearTimeout(timeout);
	happyEd.style.display = "block";
	sadEd.style.display = "none";
	giggles.play();
	timeout = setTimeout(function() {beSad()}, 2000);
}

function beSad(){
	happyEd.style.display = "none";
	sadEd.style.display = "block";
	giggles.pause();
}