// //registro de usuario//
// let nombreIngresado = prompt("ingresar nombre");
// let apellidoIngresado = prompt("ingresar apellido");

// if ((nombreIngresado !="") && (apellidoIngresado !="")){
//     alert("Nombre:"+ nombreIngresado+"\ Apellido: "+apellidoIngresado);
// }else{
//     alert("Error: Ingresar nombre y apellido");
// }



// ciclos en bucles utilizando for (desde; hasta; actualizacion)//

for (let i = 1; i <= 20; i++){   
    
    if (i == 5)
    {continue;}

    alert(i);
}

//algoritmo ciclo infinito con while, se detiene al escribir "salir"//

let  entrada = prompt ("Ingresar un nombre");
while (entrada != "Salir"){
    switch (entrada){
        case "MARIA":
        alert ("HOLA MARIA");
        break;

        case "FEDERICO":
        alert ("HOLA FEDERICO");
        break;

        default:
        alert ("¿quien eres?")
        break
    }
    entrada = prompt ("Ingresar un nombre");
}
