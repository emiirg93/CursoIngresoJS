function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

	while (sexo != "f" && sexo != "m")
	{

		alert ("Sexo Incorrecto.");
		var sexo = prompt("reingrese f ó m .");

	}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN