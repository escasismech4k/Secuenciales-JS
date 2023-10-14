//cantidadPulgadas = metrosTela / pulgadas

function calcularmetros() {
    const metrosTela = Number(document.getElementById("metros").value);
    const pulgadas = 0.0254;
    const mostrarp = document.getElementById("resultado");

    const cantidadpulgadas = metrosTela / pulgadas;

    mostrarp.textContent = `la cantidad de pulgadas que necesita pedir son: ${cantidadpulgadas.toFixed(1)}pulgadas`;

}