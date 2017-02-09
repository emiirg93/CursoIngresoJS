function Mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById('edad').value;

//se necesita asignar la variable antes del parseint SI O SI.


edad = parseInt (edad);

//la llave va despues del if porque si se cumple la condicion aparece el alert. 

	if(edad == 15){

	alert("niña bonita");
}

}//FIN DE LA FUNCIÓN