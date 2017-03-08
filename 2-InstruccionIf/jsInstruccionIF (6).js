function Mostrar()
{
//tomo la edad  

	var edad 

	edad = document.getElementById('edad').value;
	edad = parseInt (edad);

	if (edad >17)
	{

		alert ("Es Mayor De Edad.");

	}

	else 
	{

		if (edad <13)

		{

			alert ("Es Menor De Edad");

		}

		else 
		{

			alert ("Es Adolescente.");

		}

	}

}//FIN DE LA FUNCIÓN