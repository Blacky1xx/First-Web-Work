/**
 * Скрываем алерты
 */
function hideAlerts() {
	document.querySelectorAll('.alert').forEach(elem => {
		elem.classList.remove('show');
	})
}

/**
 * Валидаци формы
 */
function validate() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	hideAlerts();

	if (username === 'admin' && password === 'user') {
		document.querySelector('#success').classList.add('show');
	} else {
		document.querySelector('#failed').classList.add('show');
	}

	setTimeout(() => {
		hideAlerts();
	}, 3000)
}
