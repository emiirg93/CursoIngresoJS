function Mostrar()
{

	var contador=0;
	// declarar variables
	var max;
	var min;
	var numero;
	var respuesta='si';

		while(respuesta!='no')
		{
			
			numero = prompt ("Ingrese Numero.");
			numero = parseInt(numero);
			
			if (contador == 0)
			{

				min=numero;
				max=numero;

			}
		
			else
			{

				if (numero>max)
				{

					max = numero;

				}
				if (numero<min)
				{

					min = numero;
				}

			}
			
			contador = contador+1
			respuesta = prompt ("¿Quiere ingresar otro numero?")

		}

	document.getElementById('maximo').value=numero;
	document.getElementById('minimo').value=numero;




}//FIN DE LA FUNCIÓN