export { valor, moneda };

function valor(fecha, origen, destino) {
  return fetch('https://api.exchangeratesapi.io/' + fecha + '?base=' + origen + '&symbols=' + destino).then(function (
    response
  ) {
    return response.json();
  });
}

function moneda() {
  return fetch('https://api.exchangeratesapi.io/latest').then(function (
    response
  ) {
    return response.json();
  });
}
