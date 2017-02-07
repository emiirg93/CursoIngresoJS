/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numuno;
	var numdos;

	numuno=document.getElementById('numeroUno').value;
	numdos=document.getElementById('numeroDos').value;


	// alert ("la suma es "parseInt(numuno)+parseInt(numdos));


	alert (parseInt(numuno)+parseInt(numdos));
}

