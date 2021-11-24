const btnRegister = document.querySelector('#register');
const btnLogin = document.querySelector('#login');
const formRegister = document.querySelector('#register-form');
const formLogin = document.querySelector('#login-form');

btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    formLogin.classList.remove('display');
    formRegister.classList.add('display');
});

btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    formRegister.classList.remove('display');
    formLogin.classList.add('display');
});

function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}