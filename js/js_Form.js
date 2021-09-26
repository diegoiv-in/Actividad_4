function mostrarDatos(){
    var f = document.getElementsByName("zona");
    for(var i=0; i< f.length; i++){
        if(f[i].checked){
            var zon = f[i].value;
        }
    }
    var p = document.getElementsByName("candidato");
    for(var i=0; i< p.length; i++){
        if(p[i].checked){
            var candidat = p[i].value;
        }
    }
    datos = 'Su zona es : '+zon+' <br> Usted voto por el : '+candidat;
    document.getElementById("resultado").innerHTML = datos;

}