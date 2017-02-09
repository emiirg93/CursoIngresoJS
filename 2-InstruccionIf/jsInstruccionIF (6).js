function Mostrar()
{
	//tomo la edad  

	var edad;

	edad = document.getElementById('edad').value;
	edad = parseInt (edad);

	
	if (edad >17){
		alert ("Mayor de Edad");
	}

	if (edad <18 && edad>12){
		alert ("Adolescente");
	}

	if (edad <13){
		alert ("Niño");
	}
	
	/*
	if (edad>17){
		alert ("Es Mayor.");
	}
	else {
		if (edad<13){
			alert ("Es Niño.");
		}
		else {
			alert ("Es Adolescente.");
		}
	}
	*/
	
}//FIN DE LA FUNCIÓN