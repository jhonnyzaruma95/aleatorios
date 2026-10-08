function generarAleatorios(){
    aleatorio = [];
    let tamano = recuperarInt("txtTamano");

    if(isNaN(tamano)){
        mostrarTexto("lblError","ERROR: Ingrese un numero valido");
        return;
    }

    if(tamano < 5 || tamano > 20){
        mostrarTexto("lblError", "ERROR: El tamano debe estar entre 5 y 20");
        return;
    }

    mostrarTexto("lblError", "");

    for(let i=0; i<tamano; i++){
        console.log("Valor de i: " + i);
        let numeroAleatorio = generarNumeroAleatorio();
        aleatorio.push(numeroAleatorio);
    }

    mostrarResultados(aleatorio);

}

function mostrarResultados(arregloNumeros){
    let compTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table border='1'><tr><th>No.</th><th>Valor</th></tr>";

    for(let i=0; i<arregloNumeros.length; i++){
        contenidoTabla += "<tr><td>" + i + "</td><td>" + arregloNumeros[i] + "</td></tr>";
    }

    contenidoTabla += "</table>";
    compTabla.innerHTML = contenidoTabla;
}