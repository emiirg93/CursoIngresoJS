function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	numero = parseInt (numero);

		while (numero <0 || numero >9)
		{

			alert ("numero Incorrecto.");
			var numero = prompt("ingrese un número entre 0 y 9.");
			numero = parseInt (numero);

		}

	alert ("Numero Correcto.");

}//FIN DE LA FUNCIÓN