var result = 0;

function reset(){
    let val = document.getElementById('valor').value = '';
}

function sum(){
    let val = document.getElementById('valor').value;

   
    result += parseInt(val);
    
    reset();
    let print = document.getElementById('result');

    print.innerHTML = result;
}