function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while (respuesta == "si")
	{
		numero = prompt ("Ingrese Numero")
		numero = parseInt (numero);
		acumulador = acumulador + numero;
		contador = contador+1
		respuesta = prompt ("Ingresar Otro Numero? Si/No :");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN