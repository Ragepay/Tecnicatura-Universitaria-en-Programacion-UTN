function calcularSueldo() {
  var horasNormales = parseFloat(document.getElementById("inputHorasNormales").value);
  var horasExtras = parseFloat(document.getElementById("inputHorasExtras").value);
  var precioHoraNormal = parseFloat(document.getElementById("inputPrecioHoraNormal").value);
  var precioHoraExtra = parseFloat(document.getElementById("inputPrecioHoraExtra").value);
    // Cálculo del sueldo bruto
    var sueldoBruto = (horasNormales * precioHoraNormal) + (horasExtras * precioHoraExtra);
  
    // Cálculo de descuentos
    var jubilacion = sueldoBruto * 0.11;
    var obraSocial = sueldoBruto * 0.03;
    var sindicato = sueldoBruto * 0.04;
    var totalDescuentos = jubilacion + obraSocial + sindicato;
  
    var sueldoNeto = sueldoBruto - totalDescuentos;
  
    // Mostrar resultados
    document.getElementById("sueldoBruto").textContent = sueldoBruto.toFixed(2);
    document.getElementById("jubilacion").textContent = jubilacion.toFixed(2);
    document.getElementById("obraSocial").textContent = obraSocial.toFixed(2);
    document.getElementById("sindicato").textContent = sindicato.toFixed(2);
    document.getElementById("totalDescuentos").textContent = totalDescuentos.toFixed(2);
    document.getElementById("sueldoNeto").textContent = sueldoNeto.toFixed(2);
  }