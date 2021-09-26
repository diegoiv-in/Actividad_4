function mostrarCajas(){
    var numero = prompt("Ingresa el numero de cajas que deseas", "");
    var i = 0;
    if (numero != null) {
    
    
    
    if(numero<8){
    while(i<numero){
    var para = document.createElement("ARTICLE");
    para.classList.add("horizontal");
    document.getElementById("resultado").appendChild(para);
    i++;
    }
    }else{
    while(i<numero){
    var para = document.createElement("ARTICLE");
    para.classList.add("vertical");
    document.getElementById("resultado").appendChild(para);
    i++;
    }
    }
    }
    }