function CalcularNota() {
    //Pirmero que nada se declaran las variables
    const p1 = Number(document.getElementById("p1").value);
    const p2 = Number(document.getElementById("p2").value);
    const p3 = Number(document.getElementById("p3").value);
    const examen = parseFloat(document.getElementById("examen").value);
    const trabajo = parseFloat(document.getElementById("trabajo").value);
    const mostar = document.getElementById("resultado");
    //se realizan las operaciones

    const notaparciales = p1 + p2 + p3 / 3;
    const notafinal = (notaparciales * 0.55) + (examen * 0.3) + (trabajo * 0.15);

    // se realiza el condicional if para deducir si pasa o no
    if (notafinal > 5) {
        mensajenota = "aprobado";
    } else if (notafinal == 5) {
        mensajenota = "por los pelos";
    } else {
        mensajenota = "reprobado";
    }
    // por ultimo se muestra el mensaje

    mostar.textContent = `su calificacion final es: ${notafinal.toFixed(1)} usted esta: ${mensajenota}`;
}

