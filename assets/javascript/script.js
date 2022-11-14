const formLogin = document.getElementsByClassName('form-control')[0];
const alert = document.getElementsByClassName('alert')[0];

formLogin.addEventListener('submit', (event) => {
    if (event.target.email.value === 'deni@mail.com' && event.target.password.value === '1') {
        window.location = "home.html";
    }else {
        alert.style.display = 'inline-block';
    }
    event.preventDefault();
});