var $cargando = document.getElementById("cargando").style;
var $datos = document.getElementById("datos").style;
var $picture = document.getElementById("picture").style;
$cargando.display = "block";
$datos.display = "none";
$picture.display = "none";

console.log($cargando.display);
/**
 * Fetch
 */
fetch("https://randomuser.me/api/")
  .then((data) => data.json())
  .then((post) => {
    return post.results[0];
  })
  .then((reg) => {
    console.log(reg);
    document.getElementById("nombre").innerHTML = "Nombre: " + reg.name.first;
    document.getElementById("apellido").innerHTML =
      "Apellido: " + reg.name.last;
    document.getElementById("titulo").innerHTML = "Titulo: " + reg.name.title;
    document.getElementById("picture").src = reg.picture.large;
  })
  .catch((error) => console.log(error))
  .finally(() => {
    $cargando.display = "none";
    $datos.display = "block";
    $picture.display = "block";
  });
