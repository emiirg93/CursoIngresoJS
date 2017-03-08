function Mostrar()
{
//tomo la edad  

	var edad 

	edad = document.getElementById('edad').value;
	edad = parseInt (edad);

	if (edad <18 && estadoCivil != "Soltero")
	{

		alert ("Es Pequeño Para No Ser Soltero.")

	}


}//FIN DE LA FUNCIÓN