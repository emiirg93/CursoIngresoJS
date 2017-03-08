function Mostrar()
{
//tomo la edad  

	var edad;
	var estadocivil;

	edad = document.getElementById('edad').value;
	edad = parseInt (edad);
	estadocivil = document.getElementById('estadoCivil').value;


	if (edad >17 && estadocivil == "Soltero")
	{
		alert ("Es Soltero Y No Es Menor");
	}



}//FIN DE LA FUNCIÓN