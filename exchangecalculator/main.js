import { valor, moneda } from './ajax.js';

var salida = document.getElementById('salida');
var boton = document.getElementById('botonConvertir');
/*var tipoCambio = document.getElementById('tipoCambio');*/
var fechaActual = document.getElementById('fecha');
var monedaOrigen = document.getElementById('monedaOrigen');
var monedaDestino = document.getElementById('monedaDestino');
var cantidad = document.getElementById('cantidad');
var monedaCambio = 1.1;
cantidad.value = '';

moneda().then(data => {
  var tipoMoneda = data.rates;
  for (var i = 0; i < Object.keys(tipoMoneda).length; i++) {
    var option = document.createElement('option');
    option.text = Object.keys(tipoMoneda)[i];
    monedaOrigen.add(option);
  }
  for (var i = 0; i < Object.keys(tipoMoneda).length; i++) {
    var option = document.createElement('option');
    option.text = Object.keys(tipoMoneda)[i];
    monedaDestino.add(option);
  }
});

boton.addEventListener('click', recoger);

function recoger() {
  var fecha = fechaActual.value;
  var origen = monedaOrigen.value;
  var destino = monedaDestino.value;
  var numero = cantidad.value;
  if (fecha == '') {
    alert('Introduzca la fecha');
  } else {
    if (origen == 'Seleccionar') {
      alert('Introduzca el origen');
    } else {
      if (destino == 'Seleccionar') {
        alert('Introduzca el destino');
      } else {
        if (numero == '') {
          alert('Introduzca el número');
        } else {
          if (isNaN(numero)) {
            alert('No es un número');
          } else {
            if (origen == destino) {
              alert('No puedes cambiar la misma moneda. Para cambiar deben ser diferentes monedas');
            } else {
              cambiar(fecha, origen, destino, numero);
            }
          }
        }
      }
    }
  }
}

function cambiar(fecha, origen, destino, numero) {
  valor(fecha, origen, destino).then(data => {
    monedaCambio = data.rates[destino];
    var cambio = parseFloat(numero);
    var resultado = cambio * monedaCambio;
    /*tipoCambio.innerText = monedaCambio;*/
    salida.innerText = resultado;
  });
}
