const holaMundo = function () {
  console.log("Hola mundo!");
};

const cambioTexto = function () {
  document.getElementById("prueba").innerHTML = "Cambiado!";
};

/**
 * document.addEventListener("click", ()=>{
    console.log("hiciste click!");
    document.body.style.background="grey";
})
 */
const volverDefault = function () {
  const collection = document.getElementsByClassName("collection");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.background = "none";
    collection[i].style.color = "white";
  }
  document.body.style.background = "black";
  document.getElementById("prueba").innerHTML = "Esto es un párrafo de prueba.";
  document.getElementById("prueba").style.display = "contents";
};

const cambiarFondo = function () {
  document.body.style.background = "grey";
};

const display = function () {
  document.getElementById("prueba").style.display = "none";
};

const colorear = function () {
  const collection = document.getElementsByClassName("collection");
  console.log(collection);
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.background = "orange";
    collection[i].style.color = "black";
  }
};
