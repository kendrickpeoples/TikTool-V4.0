const formOneBtn = document.getElementById("form-1-title");
const formTwoBtn = document.getElementById("form-2-title");
const form1 = document.getElementById("form-1");
const form2 = document.getElementById("form-2");

formOneBtn.addEventListener("click", function () {
	form1.style.display = "block";
	form2.style.display = "none";
	this.classList.add("active-tab");
	formTwoBtn.classList.remove("active-tab");
});

formTwoBtn.addEventListener("click", function () {
	form1.style.display = "none";
	form2.style.display = "block";
	this.classList.add("active-tab");
	formOneBtn.classList.remove("active-tab");
});
