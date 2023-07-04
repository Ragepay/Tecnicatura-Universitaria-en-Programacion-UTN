function calcularGananciasPlazoFijo() {
  // Obtener los valores ingresados por el usuario
  var monto = parseFloat(document.getElementById("inputMonto").value);
  var tasaInteres = parseFloat(document.getElementById("inputTasaInteres").value);
  var meses = parseInt(document.getElementById("inputMeses").value);
  var interesCompuesto = document.getElementById("inputInteresCompuesto").checked;

  // Calcular las ganancias
  var ganancias;
  if (interesCompuesto) {
    ganancias = monto * Math.pow(( tasaInteres / 365 * 30 / 100 + 1), meses) - monto;
  } else {
    ganancias = monto * (tasaInteres / 365) * (meses * 30) / 100;
  }
  var montoTotal = monto + ganancias;

  // Mostrar los resultados
  document.getElementById("ganancias").textContent = ganancias.toFixed(2);
  document.getElementById("montoTotal").textContent = montoTotal.toFixed(2);
}