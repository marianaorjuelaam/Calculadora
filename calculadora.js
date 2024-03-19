//Documentación realizada con ayuda de Codeium XD

document.addEventListener('DOMContentLoaded', function() {
    const numerosElement = document.getElementById('numeros');
    //Acá se almacena la operación actual
    let operacionActual = '';
    //Creación de lista para almacenar el historial
    let historialOperaciones = [];
    //Función para ingresar números y operadores
    window.ingresar = function(valor) {//window es una variable global que contiene todas las propiedades y metodos de la ventana
        if (valor === '=') {
            calcular();
        } else {
            operacionActual += valor;
            numerosElement.innerText = operacionActual;
        }
    };
    //Función para calcular el resultado
    function calcular() {
        //Se usa try y catch para manejar los errores
        try {
            const resultado = eval(operacionActual);//eval es una función nativa de JavaScript para evaluar una cadena de texto como una expresión matemática
            numerosElement.innerText = resultado;
            historialOperaciones.push(operacionActual + '=' + resultado);
            operacionActual = resultado.toString();
            actualizarHistorial();
        } catch (e) {
            numerosElement.innerText = 'Error';//Si hay un error se muestra 'Error', ejemplo: 0/0 o 12+-*3
            operacionActual = '';
        }
    }
    //Función para borrar el contenido actual
    window.borrar = function() {
        operacionActual = '';
        numerosElement.innerText = '';//Acá define operacionAcutal como vacia
    };
    // Función para borrar el historial
    window.borrarHistrial = function() {
        historialOperaciones = [];//Acá define el historial como vacio
        actualizarHistorial();
    };
    //Función para actualizar el historial en la interfaz
    function actualizarHistorial() {
        const historialElement = document.querySelector('.historial section:last-child');
        historialElement.innerHTML = historialOperaciones.join('<br>');//.join es como un .append de python, va agregando elementos al arreglo
    }
    //Función para alternar el modo oscuro
    document.getElementById('oscuro').addEventListener('click', function() {
        document.body.classList.toggle('modo-oscuro');
        
        //Cambia el texto del botón
        if (document.body.classList.contains('modo-oscuro')) {
            this.textContent = 'Claro'; 
        } else {
            this.textContent = 'Oscuro';
        }
    });
    //Función para borrar el resultado mostrado en pantalla
    window.borrar = function() {
        operacionActual = '';
        numerosElement.innerText = '';
    };
});
