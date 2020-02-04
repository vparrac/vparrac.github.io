/* 
Nuevamente, te recomiendo revisar mejor cómo llamas las funciones
porque de resto está perfecto.  
*/

function changeMainColor() {
 if (document.body.style.backgroundColor == "black") {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  if (location.pathname === "/en.html") {
    document.getElementById("cambioTema").innerHTML = "Dark mode";
  } else {
    document.getElementById("cambioTema").innerHTML = "Modo noche";
  }
} else {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  if (location.pathname === "/en.html") {
    document.getElementById("cambioTema").innerHTML = "Light mode";

  } else {
    document.getElementById("cambioTema").innerHTML = "Modo día";
  }
}
}

function listeners() {
  this.document
    .getElementById("cambioTema")
    .addEventListener("click", changeMainColor); 
}

window.addEventListener("load", listeners, false);
