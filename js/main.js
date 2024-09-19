// ! ==================== burger-menu ====================

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("burger").addEventListener("click", function () {
		document.querySelector(".navigation").classList.toggle("open")
	})
})

// закрити бургер-меню при кліку поза його межами

document.getElementById("menu").addEventListener('click', event => {
	event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
	event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
	if (event._isClickWithInMenu) return;
	//дія при кліку
	document.querySelector(".navigation").classList.remove("open")
});


// ! ==================== xxxxx ====================

