//Quizás intentaría mejora este cod para que se entienda mejor. Así:

/**
 * Método que redirije a la página dado un idioma
 */
function sender(lang = "es") {
  setTimeout(function() {
    location.href = `/${lang}.html`;
  }, 500);
}

function listeners(){
  this.document
    .getElementById("btnIngles")
    .addEventListener("click", () => sender("en"));
  this.document
    .getElementById("btnEspanol")
    .addEventListener("click", () => sender("es"));
}
window.addEventListener("load", listeners, false);
