const inputs = document.querySelectorAll('input');

const patterns = {
	telephone: /^\d{10}$/,
	username: /^[a-z\d]{5,12}$/i,
	password: /^[\w@-]{8,20}$/,
	slug: /^[a-z\d-]{8,20}$/,
	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,10})?$/
}

const validateFunc = (field, regEx) => {
	regEx.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
}

inputs.forEach(el => {
	el.addEventListener('keyup', (e) => {

		validateFunc(e.target, patterns[e.target.attributes.name.value]);
	});
});




























// const inputs = document.querySelectorAll('input');


// const patterns = {
// 	telephone: /^\d{10}$/,
// 	slug: /^([a-z0-9]-){11-20}$/,
// };

// const validateFunc = (field, regEx) => {
	// console.log(regEx.test(field.value));

// 	if (regEx.test(field.value)) {
// 		field.className = 'valid'
// 	} else {
// 		field.className = 'ivalid'
// 	}
// }

// inputs.forEach(input => {
// 	input.addEventListener('keyup', (e) => {
// 		// console.log(e.target.attributes.name.value);

// 		validateFunc(e.target, patterns[e.target.attributes.name.value]);
// 	})
// })