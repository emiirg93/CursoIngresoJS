function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta= true;
	var numero;


	while(respuesta == true)
	{ 
		numero = prompt("Ingrese los numeros a sumar");
		numero = parseInt (numero);
		acumulador = acumulador+numero;
		contador++

		respuesta = confirm("Desea Continuar?");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN