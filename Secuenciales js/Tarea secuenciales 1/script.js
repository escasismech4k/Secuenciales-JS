//totalEstudiantes = hombres + mujeres

//porcentajeHombres = (hombres / totalEstudiantes) * 100;
//porcentajeMujeres = (mujeres / totalEstudiantes) * 100;

function calcularporcentaje(){
const hombres = Number(document.getElementById("hombres").value);
const mujeres = Number(document.getElementById("mujeres").value);
const mostrarh = document.getElementById("resultadoh");
const mostrarm = document.getElementById("resultadom")

const totalEstudiantes = hombres + mujeres
const porcentajeHombres = (hombres / totalEstudiantes) * 100;
const porcentajeMujeres = (mujeres / totalEstudiantes) * 100;

mostrarh.textContent = `el porcentaje de hombres es: ${porcentajeHombres.toFixed(0)}%`
mostrarm.textContent = `el porcentaje de mujeres es ${porcentajeMujeres.toFixed(0)}%`

}

