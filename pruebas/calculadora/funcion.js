const sumar = function () {
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;
  let resultado = parseInt(numero1) + parseInt(numero2);

  document.getElementById("resultado").textContent =
    "Resultado es: " + resultado;
  document.getElementById("resultado").style.display = "block";
};
