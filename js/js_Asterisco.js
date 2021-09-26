function asterisco() {
	var a, num;
	num = 0;
	a = 0;
    var caja="";
	
	num = Number(prompt("Ingrese el numero de astericos"));
	while (a!=num) {
       
		caja += "<aside style=\"\">*</aside>";
		a = a+1;
	}

    
    document.getElementById("resultado").innerHTML =caja;
}