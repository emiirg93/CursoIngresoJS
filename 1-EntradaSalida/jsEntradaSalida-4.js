/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
 	// designo una variable y uso prompt para tomar el dato
 	
 	var minombre = prompt ("Ingrese Su Nombre");
	document.getElementById('elNombre').value = minombre;
}

