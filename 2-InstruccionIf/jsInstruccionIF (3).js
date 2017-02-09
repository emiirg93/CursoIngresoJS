function Mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById('edad').value;

//se necesita asignar la variable antes del parseInt SI O SI.


edad = parseInt (edad);

//la llave va despues del if porque si se cumple la condicion aparece el alert. 
/*
	if(edad >= 18){

	alert("Es Mayor De Edad");
}
//no puedo repetir el signo menor o igual porque me saltan los dos alert.
	if(edad < 18){

	alert("Es Menor De Edad");
*/

//otra forma de resolverlo

if(edad >= 18){

	alert("Es Mayor De Edad");
}

//else significa "sino" y se activa si la primera condicion no se cumple.

else {

	alert("Es Menor De Edad");
}
}//FIN DE LA FUNCIÓN