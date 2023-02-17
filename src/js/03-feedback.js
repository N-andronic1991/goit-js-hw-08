import throttle from "lodash.throttle"

const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector(".feedback-form input");
const textareaEl = document.querySelector(".feedback-form textarea");

const STORAGE_KEY = "feedback-form-state";
const formData = {};

formEl.addEventListener("input", throttle(onFormInput, 500));
formEl.addEventListener("submit", onFormSubmit);

populateFormOutput();

function onFormInput(event) {
	formData[event.target.name] = event.target.value;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
	
};

function onFormSubmit(event) {
	event.preventDefault();
    console.log("Sended formData:", formData);
	event.target.reset();
	localStorage.removeItem(STORAGE_KEY, JSON.stringify(formData));
};

function populateFormOutput() {
	let savedData = localStorage.getItem(STORAGE_KEY);
	try {
		if (savedData) {
			const savedDataObj = JSON.parse(savedData);
			inputEl.value = savedDataObj.email;
		 	textareaEl.value = savedDataObj.message;
	 }
	} catch (error) {
		console.log(error.message);	
	}
	
};


