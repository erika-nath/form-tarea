
const btn = document.querySelector("button");

btn.addEventListener("click",function(){

const cliente = document.querySelector("#cliente").value
const direccion = document.querySelector("#direccion").value
const select = document.getElementById('option')
const value = select.options[select.selectedIndex].value;
const adicionales = document.getElementsByTagName('input');


var values=[]

let inputs= document.querySelectorAll("#pedidosForm input")
let valido=true;

inputs.forEach(input => {
    if(input.checkValidity()){
        input.classList.remove("invalido");
        input.classList.add("valido");

        
    }else{  
       input.classList.add("invalido");
        input.classList.remove("valido");
        valido=false;
    }
})

if(valido){
    for(i = 0; i < adicionales.length; i++){
        if (adicionales[i].checked == true){
            
       values.push(adicionales[i].value);
        }
        
    }
       alert(`Cliente: ${cliente},Direccion: ${direccion},Tamaño: ${value},Sabor:${values.toString()}`)
    }
    else{ 
    document.getElementById("errorOpc").innerHTML = "Elige un tamaño";
    document.getElementById("errorSabor").innerHTML = "Elige un sabor";
    valido=false
    alert("Corrije campos en rojo")
}

})