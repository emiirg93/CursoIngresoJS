/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	

	var numerouno=document.getElementById('numeroUno').value;
	var numerodos=document.getElementById('numeroDos').value;

	var suma=parseInt(numerouno)+parseInt(numerodos);

	ALERT (suma);

	
}


function restar()
{
	

	var numerouno=document.getElementById('numeroUno').value;
	var numerodos=document.getElementById('numeroDos').value;

	var resta=parseInt(numerouno)-parseInt(numerodos);

	ALERT (resta);


}

function multiplicar()
{ 
	

	var numerouno=document.getElementById('numeroUno').value;
	var numerodos=document.getElementById('numeroDos').value;

	var multiplicar=parseInt(numerouno)*parseInt(numerodos);

	ALERT (multiplicar);


}

function dividir()
{
	

	var numerouno=document.getElementById('numeroUno').value;
	var numerodos=document.getElementById('numeroDos').value;

	var dividir=parseInt(numerouno)/parseInt(numerodos);

	ALERT (dividir);


}

