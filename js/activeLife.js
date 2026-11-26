

const burgerBtn = document.getElementById("burgerBtn");
const myMenu = document.getElementById("myMenu");

if (burgerBtn && myMenu) {
  burgerBtn.addEventListener("click", function () {
    if (myMenu.style.display === "flex") {
      myMenu.style.display = "none";
    } else {
      myMenu.style.display = "flex";
    }
  });
}

function validateForm() {
	const name = document.getElementById('name').value.trim();
	const email = document.getElementById('email').value.trim();
	const phone = document.getElementById('phone').value.trim();
	const wednesday = document.getElementById('checkWednesday').checked;
	const sunday = document.getElementById('checkSunday').checked;
	const formMessage = document.getElementById('formMessage');

	formMessage.textContent = '';
	formMessage.style.color = '';

	let isValid = true;
	const errors = [];

	if (name === '' || name.length < 2) {
		errors.push('Please enter your name (at least 2 characters).');
		isValid = false;
	}

	const atIndex = email.indexOf('@');
	const dotIndex = email.lastIndexOf('.');
	if (email === '' || atIndex < 1 || dotIndex <= atIndex + 1 || dotIndex === email.length - 1) {
		errors.push('Please enter a valid email address.');
		isValid = false;
	}

	const digitsOnly = phone.replace(/\D/g, '');
	if (phone === '' || digitsOnly.length < 7) {
		errors.push('Please enter a valid phone number.');
		isValid = false;
	}

	if (!wednesday && !sunday) {
		errors.push('Please select at least one running day.');
		isValid = false;
	}

	if (!isValid) {
		formMessage.style.color = 'crimson';
		formMessage.innerHTML = errors.join('<br>');
		return false;
	}

	const selectedDays = [];
	if (wednesday) selectedDays.push('Wednesday');
	if (sunday) selectedDays.push('Sunday');

	document.getElementById('runningClubForm').style.display = 'none';
	document.getElementById('successTitle').textContent = 'Form submitted, thanks ' + name + '!';
	document.getElementById('successDetails').textContent =
		'Running days: ' + selectedDays.join(' & ') + ' · Confirmation for ' + email;
	document.getElementById('successCard').style.display = 'block';

	return false;
}
function resetClubForm() {
	const form = document.getElementById('runningClubForm');
	const formMessage = document.getElementById('formMessage');
	const successCard = document.getElementById('successCard');

	form.reset(); // clear the form
	formMessage.textContent = '';
	formMessage.style.color = '';
	successCard.style.display = 'none';
	form.style.display = 'block';
}