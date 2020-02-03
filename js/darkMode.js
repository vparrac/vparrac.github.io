function darkMode() { if (document.body.style.backgroundColor == "black") {
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
    .addEventListener("click", darkMode); 
}

window.addEventListener("load", listeners, false);
