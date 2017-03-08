function Mostrar()
{

	var contador=0;
	var acumuladormax=0;
	var acumuladormin=0;
	
	var respuesta = true;

	while(respuesta == true)
	{
		
		numero = prompt("Ingrese numeros.");
		numero = parseInt (numero);

		if(contador==0)
		{

			acumuladormax=numero
			acumuladormin=numero

		}
		else 
		{

			if(numero>acumuladormax)
			{

				acumuladormax=numero;
			}
			
			if(numero<acumuladormin)
			{

				acumuladormin=numero;

			}

		}


		respuesta = confirm("Desea ingresar mas numeros?")
		contador++
	}

document.getElementById('maximo').value=acumuladormax;
document.getElementById('minimo').value=acumuladormin;


}//FIN DE LA FUNCIÓN