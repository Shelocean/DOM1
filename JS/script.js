document.getElementById("nombre")

function saludar() {

    // . value permite leer el valor de un campo de formulario
    let nombre = document.getElementById("nombre").value;

    // 1. Mostrar informacion en una ventana emergente
    alert(`Hola, ${nombre}`);

    // 2. Mostrar informacion dentro de un input
    document.getElementById("resultado").value = `Hola, ${nombre}`;
}

function registrar() {

    let nombre = document.getElementById("nombre2").value;
    let programa = document.getElementById("programa2").value;

    // 1.
    alert(`Aprendiz: ${nombre}\nPrograma: ${programa}`);

    // 2.
    document.getElementById("resultado11").value =
        `${nombre} - ${programa}`;

    // 3.
    document.getElementById("resultado22").innerText =
        `Nombre: ${nombre} | Programa: ${programa}`;

    // 4.
    document.getElementById("resultado33").innerHTML =
        `<p style="color: blue;">
            <strong>Aprendiz:</strong>${nombre}<br>
            <strong>Programa:</strong> ${programa}
        </p>`;

    // 5.
    document.getElementById("resultado44").textContent =
        `El aprendiz ${nombre} está inscrito en ${programa}.`;
}

function calcularOperaciones() {

    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;


    let entero1 = parseInt(valor1);
    let entero2 = parseInt(valor2);
    document.getElementById("resParseInt").textContent = 
        `ParseInt("${valor1}") = ${entero1} | parseInt("${valor2}") = ${entero2}`;


    let decimal1 = parseFloat(valor1);
    let decimal2 = parseFloat(valor2);
    document.getElementById("resParseFloat").textContent = 
        `parseFloat("${valor1}") = ${decimal1} | parseFloat("${valor2}") = ${decimal2}`;



    let numero1 = Number(valor1);
    let numero2 = Number(valor2);
    document.getElementById("resNumber").textContent = 
        `Number("${valor1}") = ${numero1} | Number("${valor2}") = ${numero2}`;

 
    let suma = decimal1 + decimal2;
    document.getElementById("resSuma").textContent =
        `Suma: ${decimal1} + ${decimal2} = ${suma}`;  

}