function importe() {
	var importBruto, importNeto, impuestos;
	
	importBruto = Number(prompt());
	if (importBruto>15000) {
		impuestos = importBruto*0.16;
	} else {
		impuestos = importBruto*0.1;
	}
	importNeto = importBruto+impuestos;


    datos="Su valor de importe neto es: "+importNeto+"<br><b> Su valor de impuestos"+impuestos;
    document.getElementById("resultado").innerHTML = datos;
}