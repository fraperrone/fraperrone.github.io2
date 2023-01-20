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
  });
