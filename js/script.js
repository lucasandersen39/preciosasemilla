

function toggleMenu() {
    const menu = document.querySelector('.responsive-menu');
    menu.classList.toggle('show');

}

const botones=document.querySelectorAll('.btn-redirigir');

botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
        // Mostrar el cuadro de diálogo
        const dialogo = document.getElementById('dialogo');
        const mensajeDialogo = document.getElementById('mensaje-dialogo');
        
        // Cambiar el mensaje del diálogo
        mensajeDialogo.textContent = 'Redirigiendo al sitio, aguarde...';
        
        // Hacer visible el cuadro
        dialogo.classList.add('dialogo-visible');

        // Redirigir después de 3 segundos
        setTimeout(() => {
            window.location.href = 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380849342d22c01936b414f170d76'; // Cambia a tu URL
        }, 3000); // 3 segundos de espera
    });
});



