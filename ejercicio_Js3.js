document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('form').addEventListener('submit', validateEmail);
});

// Email format validation
function validateEmail(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let mailformat1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let mailformat2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    document.querySelector('#error').style.color = 'red';
    if (email == '' || email.length == 0) {
        error.innerHTML = "El usuario no puede estar vacío.";
        document.getElementById("email").focus();
        return;
    } else {
        if (!mailformat1.test(String(email).toLowerCase()) || !mailformat2.test(String(email).toLowerCase())) {
            error.innerHTML = 'Ha introducido un email inválido.';
            document.getElementById("email").focus();
        } else {
            error.innerHTML = '';
            document.getElementById("password").focus();
            let password = document.getElementById("password").value;
            if (password === '') {
                error.innerHTML = 'Introduzca una contraseña con al menos 6 caracteres.';
                document.getElementById("password").focus();
            } else if (password.length < 6) {
                error.innerHTML = 'Ha introducido una contraseña muy corta.';
                document.getElementById("password").focus();
            } else {
                error.innerHTML = '';
                this.submit(alert("Bienvenido"));
                return true;
            }
        }
    }
}


const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    switchButton.classList.toggle('active'); //toggle the HTML button with the id='switch' with the class 'active'
});