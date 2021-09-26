function sueldo() {
	var antiguedad, sueldo;
    antiguedad = parseInt(prompt('Ingresa el valor de antiguedad:',''));
	
	sueldo = 40000.0;
	if (antiguedad>0) {
		sueldo = 40000.0*1.03;
	}
	if (antiguedad>3) {
		sueldo = 40000.0*1.05;
	}
	if (antiguedad>5) {
		sueldo = 40000.0*1.07;
	}
	if (antiguedad>10) {
		sueldo = 40000.0*1.1;
	}
	

    datos="El sueldo que a usted le corresponde es de: $"+sueldo;
    document.getElementById("resultado").innerHTML = datos;
}