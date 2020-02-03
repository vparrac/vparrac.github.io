
/**
 * Método que redirije a la página en inglés
 */
function btnIngles() {
  setTimeout(function() {
    location.href = "/en.html";
  }, 500)
  ;
}
/**
 * Método que redirije a la página en español
 */
function btnEspanol() {
  setTimeout(function() {
    location.href = "/es.html";
  }, 500);
}

function listeners(){
  this.document
    .getElementById("btnIngles")
    .addEventListener("click", btnIngles);
  this.document
    .getElementById("btnEspanol")
    .addEventListener("click", btnEspanol);
}
window.addEventListener("load", listeners, false);