function mostrarDatos(){
    var num1, num2, num3;
    num1 = parseInt(prompt('Ingrese el primer número:',''));
    num2 = parseInt(prompt('Ingrese el segundo numero:',''));
    num3 = parseInt(prompt('Ingrese el ternum3er número:',''));
    caja="";
    
 if((num1>num2)&&(num2>num3))
    caja += "<aside style=\"\">"+num1+">"+num2+">"+num3+"</aside>";
    
        
    else if((num1>num3)&&(num3>num2))
   
        
        caja += "<aside style=\"\">"+num1+">"+num3+">"+num2+"</aside>";




    else if((num2>num1)&&(num1>num3))
      
        caja += "<aside style=\"\">"+"Estos son sus numeros de Mayor a Menor"+"<br>"+num2+">"+num1+">"+num3+"</aside>"
    else if((num2>num3)&&(num3>num1))
    
       
        caja += "<aside style=\"\">"+"Estos son sus numeros de Mayor a Menor"+"<br>"+num2+">"+num3+">"+num1+"</aside>"
    else if((num3>num1)&&(num1>num2))
   
        
        caja += "<aside style=\"\">"+"Estos son sus numeros de Mayor a Menor"+"<br>"+num3+">"+num1+">"+num2+"</aside>";
    else if((num3>num2)&&(num2>num1))
    
       
        caja += "<aside style=\"\">"+"Estos son sus numeros de Mayor a Menor"+"<br>"+num3+">"+num2+">"+num1+"</aside>";


        document.getElementById("resultado").innerHTML =caja;
 
    } 
    
    
    