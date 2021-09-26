function impar() {
	var i;
	var suma = new Number();
	suma = 0;
	for (i=1;i<=100;i+=2) {
		suma = suma+i;
	}
	


    datos="La suma de los impares del 1 al 100 es:"+"  "+suma;
    document.getElementById("resultado").innerHTML = datos;
}
