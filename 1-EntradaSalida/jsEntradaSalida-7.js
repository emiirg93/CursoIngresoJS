/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerouno;
	var numerodos;
	var suma;

	numerouno = document.getElementById('numeroUno').value;
	numerodos = document.getElementById('numeroDos').value;

	suma = parseInt (numerouno)+parseInt(numerodos);

	alert ("La Suma Es : "+suma);
}

function restar()
{
	var numerouno;
	var numerodos;
	var suma;

	numerouno = document.getElementById('numeroUno').value;
	numerodos = document.getElementById('numeroDos').value;

	suma = parseInt (numerouno)-parseInt(numerodos);

	alert ("La Resta Es : "+suma);
}

function multiplicar()
{ 
	var numerouno;
	var numerodos;
	var suma;

	numerouno = document.getElementById('numeroUno').value;
	numerodos = document.getElementById('numeroDos').value;

	suma = parseInt (numerouno)*parseInt(numerodos);

	alert ("La Multiplicacion Es : "+suma);
}

function dividir()
{
	var numerouno;
	var numerodos;
	var suma;

	numerouno = document.getElementById('numeroUno').value;
	numerodos = document.getElementById('numeroDos').value;

	suma = parseInt (numerouno)/parseInt(numerodos);

	alert ("La Division Es : "+suma);
}

