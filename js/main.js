/**
 * Método que redirije a la página en inglés
 */
$("button.botonInicio.eng").click(function() { 
    setTimeout(function() {
    location.href = "/en.html";
  }, 1000);
});
/**
 * Método que redirije a la página en español
 */
$("button.botonInicio.es").click(function() {
  setTimeout(function() {
    location.href = "/es.html";
  }, 500);
});

/**
 * Método que cambia el tema a modo noche
 */

$("#cambioTema").click(function() {
  if (this.document.body.style.backgroundColor == "black") {
    this.document.body.style.backgroundColor = "white";
    this.document.body.style.color = "black";
    this.document.getElementById("cambioTema").innerHTML = "Modo noche";
  } else {
    this.document.body.style.backgroundColor = "black";
    this.document.body.style.color = "white";
    this.document.getElementById("cambioTema").innerHTML = "Modo día";
  }
});