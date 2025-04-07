function calcularNota() {
    let corte1 = parseFloat(document.getElementById("corte1").value);
    let corte2 = parseFloat(document.getElementById("corte2").value);

    if (isNaN(corte1) || isNaN(corte2)) {
        document.getElementById("resultado").innerHTML = "⚠️ Ingresa ambas notas.";
        return;
    }

    // Validar que las notas no sean mayores a 5.0
    if (corte1 > 5.0 || corte2 > 5.0) {
        document.getElementById("resultado").innerHTML = "⚠️ Las notas no pueden ser mayores a 5.0.";
        return;
    }

    let notaNecesaria = (3.0 - (corte1 * 0.30) - (corte2 * 0.30)) / 0.40;
    let mensaje = "";

    if (notaNecesaria > 5.0) {
        mensaje = "❌ No es posible alcanzar 3.0, necesitarías más de 5.0.";
    } else if (notaNecesaria <= 0) {
        mensaje = "✅ Ya tienes asegurado el 3.0 o más.";
    } else if (notaNecesaria < 2.0) {
        mensaje = "🎉 Quedas eximido del examen final.";
    } else {
        mensaje = `Necesitas obtener al menos: <strong>${notaNecesaria.toFixed(2)}</strong> en la Evaluación Final.`;
    }

    document.getElementById("resultado").innerHTML = mensaje;
}
