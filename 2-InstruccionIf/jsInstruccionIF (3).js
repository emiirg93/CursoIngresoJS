function Mostrar()
{
//tomo la edad  

	var edad 

	edad = document.getElementById('edad').value;
	edad = parseInt (edad);

	if (edad > 17)
	{

		alert ("Es Mayor De Edad.");

	}

	else 
	{

		alert ("Es Menor De Edad.");
			
	}

}//FIN DE LA FUNCIÓN