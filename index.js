//Ticket basico
const ticket = 200;

//Descuentos
let descuentoEstudiante, descuentoTrainee, descuentoJunior;
descuentoEstudiante = 0.80;
descuentoTrainee = 0.50;
descuentoJunior = 0.15;

//variables necesarias del html
let formulario, nombre, apellido, correo, cantidad, categoria, totalAPagar, btnBorrar, btnResumen, navbar;
navbar = document.querySelector("#navbar-toggler");
formulario = document.querySelector("#formulario");
cantidad = document.querySelector("#cantidad");
categoria = document.querySelector("#categoria");
totalAPagar = document.querySelector("#totalAPagar");
btnBorrar = document.querySelector("#borrar");
btnResumen = document.querySelector("#resumen");

//Validaciones
function validacion() {
    nombre = document.querySelector('input[placeholder = "Nombre"]').value;
    apellido = document.querySelector('input[placeholder = "Apellido"]').value;
    correo = document.querySelector('input[placeholder = "Correo"]').value;

    if (nombre == "" && apellido == "" && correo == "") {
        alert("COMPLETA LOS CAMPOS");
        return
    } else if (nombre == "") {
        alert("INGRESA TU NOMBRE");
        return
    } else if (apellido == "") {
        alert("INGRESA TU APELLIDO");
        return
    } else if (correo == "") {
        alert("INGRESA TU CORREO ELECTRONICO");
        return
    } else if (cantidad.value == "") {
        alert("INGRESA LA CANTIDAD DE TICKETS");
        return
    }
}

//Calculo de precios
function calcularPago(){
    let total = cantidad.value * ticket;
    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descuentoEstudiante);
            break;
        case "trainee":
            total = total - (total * descuentoTrainee);
            break;
        case "junior":
            total = total - (total * descuentoJunior);
            break;
    }
    totalAPagar.innerHTML = `Total a pagar: $${total}`;
}

//Botones
btnResumen.addEventListener('click', (event)=>{
    event.preventDefault();
    validacion();
    calcularPago();
});
btnBorrar.addEventListener('click', () => {
    formulario.reset();
    totalAPagar.innerHTML = `Total a pagar: $`;
});