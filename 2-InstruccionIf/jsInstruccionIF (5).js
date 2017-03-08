function Mostrar()
{
//tomo la edad  

	var edad 

	edad = document.getElementById('edad').value;
	edad = parseInt (edad);

	if (!(edad >12 && edad <18))

	{

		alert ("No Es Adolescente.");

	}

}//FIN DE LA FUNCIÓN