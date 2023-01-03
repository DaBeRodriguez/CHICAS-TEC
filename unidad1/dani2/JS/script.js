
//imprimir em consola

function datos() {
    var nombres = document.getElementById("nombres").value;

    var apellidos = document.getElementById("apellidos").value;

    var email = document.getElementById("email").value;

    var fecha = document.getElementById("fecha-nacimiento").value;


    var femenino = document.getElementById("f").checked;

    var masculino = document.getElementById("m").checked;

    var Estatura = document.getElementById("Estatura").value;


    var peso = document.getElementById("peso").value;

    var deporte = document.getElementById( "deporte").checked;

    //var mensaje = "\nmi nombre es : " + nombres 
    //+ "\nmi apellido es : " + apellidos 
    //+ "\nmi correo  es : " + email 
    //+ "\nnaci el : " + fecha 
    //+ "\nMujer : " + femenino 
    //+ "\nHombre " + masculino
    //+ "\nmido : " + Estatura 
    //+ "\nEstoy pesando : " + peso 
    //+ "\nPractico deporte : " + deporte; 
    //console.log(mensaje);

    var resultado=peso/Estatura**2; 
    var sobrepeso=resultado<=30 ; 
    var mensaje="\nresultado : " +resultado + "\nsobrepeso : " +sobrepeso;
    alert(mensaje);



}



