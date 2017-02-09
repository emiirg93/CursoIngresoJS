function Mostrar()
{
//tomo la edad  

	var edad=document.getElementById('edad').value;

	edad = parseInt (edad);

	var estadocivil=document.getElementById('estadoCivil').value;

	if (edad <18 && estadocivil !="Soltero"){

		alert ("Es Pequeño Para No Ser Soltero.")
	}


}//FIN DE LA FUNCIÓN