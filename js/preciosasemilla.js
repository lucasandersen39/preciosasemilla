"uses strict"

document.addEventListener('DOMContentLoaded', function () {
    //Si localStorage tiene un usuario, poner el nombre en el usuario
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
        const spanUsuario = document.querySelector('#span_nombre_usuario');
        spanUsuario.textContent = usuario;
        spanUsuario.classList.remove('oculto');
        document.querySelector('#link_ingresar').classList.add('oculto');
        const btnsAdmin = document.querySelectorAll('.btns-action-admin');
        btnsAdmin.forEach(btn => {
            btn.classList.remove('oculto');
        });
    } else {
        document.querySelector('#cerrar_sesion_user').classList.add('oculto');
    }

    const formLogin = document.querySelector('#form_login');
    if (formLogin)
        formLogin.addEventListener('submit', function (e) {
            e.preventDefault();
            let campos_completos = true;
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const spanUsuario = document.querySelector('#error_usuario');
            const spanPassword = document.querySelector('#error_password');
            const spanAcceso = document.querySelector('#error_acceso_incorrecto');
            spanUsuario.classList.add('oculto');
            spanPassword.classList.add('oculto');
            spanAcceso.classList.add('oculto');
            if (email == '') {
                spanUsuario.classList.remove('oculto');
                campos_completos = false;
            }
            if (password == '') {
                spanPassword.classList.remove('oculto');
                campos_completos = false;
            }
            if (campos_completos) {
                if (email != 'admin@admin.com' || password != 'Admin') {
                    spanAcceso.classList.remove('oculto');

                } else {
                    localStorage.setItem('usuario', 'Administrador');
                    const btnsAdmin = document.querySelectorAll('.btns-action-admin');
                    btnsAdmin.forEach(btn => {
                        btn.classList.remove('oculto');
                    });
                    location.href = 'index.html';
                    //Guardar el nombre de usuario en el local storage
                }
            }
        });

    const formContacto = document.querySelector('#form_contacto');
    if (formContacto)
        formContacto.addEventListener('submit', function (e) {
            e.preventDefault();
            let hay_error = false;
            const nombre = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const mensaje = document.querySelector('#comment').value;
            const spanNombre = document.querySelector('#error_nombre_contacto');
            const spanEmail = document.querySelector('#error_email_contacto');
            const spanComentario = document.querySelector('#error_comentario_contacto');
            spanNombre.classList.add('oculto');
            spanEmail.classList.add('oculto');
            spanComentario.classList.add('oculto');
            if (nombre == '') {
                spanNombre.classList.remove('oculto');
                hay_error = true;
            }
            if (email == '') {
                spanEmail.classList.remove('oculto');
                hay_error = true;
            }
            if (mensaje == '') {
                spanComentario.classList.remove('oculto');
                hay_error = true;
            }
            if (!hay_error) {
                document.querySelector('#mensaje_enviado').classList.remove('oculto');
                formContacto.reset();
            }
        });

    const cerrar_sesion = document.querySelector('#cerrar_sesion_user');
    if (cerrar_sesion)
        cerrar_sesion.addEventListener('click', function () {
            localStorage.removeItem('usuario');
            cerrar_sesion.classList.add('oculto');
            location.reload();
        });

    const cardsHome = document.querySelectorAll('.card-home');
    cardsHome.forEach(card => {
        card.addEventListener('click', function () {
            location.href = `avancesconstruccion.html`;
        });
    });

    const emailContacto = document.querySelector('#email');
    if (emailContacto) {
        //Evento cuando el usuario sale del input
        emailContacto.addEventListener('blur', function () {
            const email = emailContacto.value;
            const spanEmail = document.querySelector('#error_email_incorrecto_contacto');
            spanEmail.classList.add('oculto');
            if (email != '' && !validate_email(email)) {
                spanEmail.classList.remove('oculto');
            }
        });
    }

    function validate_email(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

});