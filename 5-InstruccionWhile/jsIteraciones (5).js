function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	/*

	una forma de hacerlo es negar todo, que el sexo sea
	igual a F o M

	while (!(sexo == "f" || sexo == "m"))
	{

		var sexo = prompt("ingrese f ó m .");

	}
	*/

	while (sexo != "f" && sexo != "m")
	{

		var sexo = prompt("ingrese f ó m .");

	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN