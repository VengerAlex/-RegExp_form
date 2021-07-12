const inputs = document.querySelectorAll('input');


const patterns = {
	telephone: /^\d{10}$/,
	slug: /^([a-z0-9]-){11-20}$/,
};

const validateFunc = (field, regEx) => {
	console.log(regEx.test(field.value));
}

inputs.forEach(input => {
	input.addEventListener('keyup', (e) => {
		// console.log(e.target.attributes.name.value);

		validateFunc(e.target, patterns[e.target.attributes.name.value]);
	})
})