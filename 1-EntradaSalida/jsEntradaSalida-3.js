/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//creo una variable
	var nombre;

	nombre = document.getElementById('elNombre').value;
	
	/* document.g + tab + shift + i 
	y coloco el ID del <imput ID="elNombre"> adentro del parenesis. 
	por ultimo para que funcione en el final tengo que escribir .value
	*/
	
	alert ("nombre ingresado es: " + nombre);
}


