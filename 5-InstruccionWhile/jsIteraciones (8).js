function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var acumuladornegativo;
	var acumuladorpositivo;
	var respuesta=true;

	while (respuesta == true)
	{

		numero = prompt ("Ingrese Numero.");
		numero = parseInt (numero);
		
		if (numero<0)
		{

  			acumuladornegativo = negativo*numero;
		
		}

		else
		{

			acumuladorpositivo = positivo+numero;

		}
		
		contador = contador+1;

		respuesta = confirm("¿Quiere ingresar otro numero?");
	}

document.getElementById('suma').value=acumuladorpositivo;
document.getElementById('producto').value=acumuladornegativo;

}//FIN DE LA FUNCIÓN