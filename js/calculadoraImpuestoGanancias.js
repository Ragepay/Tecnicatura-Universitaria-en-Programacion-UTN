function calcularImpuesto() {
  var sueldoBruto = parseFloat(document.getElementById("inputSueldo").value);
  var impuestoAplicable = sueldoBruto > 506000;

  if (!impuestoAplicable) {
    document.getElementById("resultado").innerHTML = "Usted no aplica para el impuesto a las ganancias.";
  } else {
    var impuesto = sueldoBruto * 0.2126;

    var cantidadHijos = parseInt(document.getElementById("inputCantidadHijos").value);
    impuesto -= cantidadHijos * (0.0057 * sueldoBruto);

    var porcentajeAportesSindicato = parseFloat(document.getElementById("inputPorcentajeAportes").value);
    impuesto -= porcentajeAportesSindicato * 0.0035 * sueldoBruto;

    if (document.getElementById("inputCasado").checked) {
      impuesto -= 0.0113 * sueldoBruto;
    }

    if (document.getElementById("inputAlquiler").checked) {
      impuesto -= 0.0146 * sueldoBruto;
    }

    if (document.getElementById("inputSeguroVida").checked) {
      impuesto -= 0.0007 * sueldoBruto;
    }

    if (document.getElementById("inputJubilado").checked) {
      impuesto -= 0.025 * sueldoBruto;
    }

    if (document.getElementById("inputPatagonico").checked) {
      impuesto -= 0.0158 * sueldoBruto;
    }

    document.getElementById("resultado").innerHTML = "Impuesto a las ganancias: $" + impuesto.toFixed(2);
  }
}
fngnfdj