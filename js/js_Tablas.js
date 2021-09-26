function tablas() {
	var a, b;
    var caja="";
	for (a=1;a<=10;a++) {
		for (b=1;b<=10;b++) {
           
            caja += "<aside style=\"\">"+a+"*"+b+"="+a*b+"</aside>";
			
		}
      
	}

   
    document.getElementById("resultado").innerHTML =caja;
}
document.write(a," * ",b," = ",a*b,'<BR/>');