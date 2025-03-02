const btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let valido = true;

const cliente = document.querySelector("#cliente").value
const direccion = document.querySelector("#direccion").value
const select = document.getElementById('option')
//const value = select.options[select.selectedIndex].value;
const adicionales = document.getElementById('sabor');


var values=[]

let inputs= document.querySelectorAll("#pedidosForm input")

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


if(adicionales.checked){
    document.getElementById("errorSabor").innerHTML = "✅ Sabor elegido.";
      document.getElementById("errorSabor").classList.add("valido");
      adicionales.classList.add("valido");
    }
    else{   
    document.getElementById("errorSabor").innerHTML = "Elige un sabor";
    valido=false
    alert("Corrije campos en rojo")
}

if(!select.value){
    document.getElementById("errorOpc").innerHTML = "Elige una opcion";
    valido = false
}else{
    document.getElementById("errorOpc").innerHTML = "✅ Tamaño seleccionado.";
    document.getElementById("errorOpc").classList.add("valido");
    select.classList.add("valido");
}


if (valido){
alert(`Cliente: ${cliente},Direccion: ${direccion},Tamaño: ${value},Sabor:${values.toString()}`)
    }
});