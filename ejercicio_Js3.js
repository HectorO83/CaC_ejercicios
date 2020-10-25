document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById('form');
    formulario.addEventListener('submit', validateEmail);
});

// Email format validation
function validateEmail(evento) {
    evento.preventDefault();
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
        } else {
            error.innerHTML = '';
            document.getElementById("password").focus();
            let password = document.getElementById("password").value;
            if (password.length < 6) {
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