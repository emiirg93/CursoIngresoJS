function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numero;

	numero = Math.floor((Math.random() * 10) + 1);
	numero = parseInt (numero);

	if (numero <4)
	{

		alert (numero+" Insuficiente.")

	}

	else 
	{

		if (numero >=9)
		{

			alert (numero+" Excelente.")

		}

		else
		{

			alert (numero+" Aprobo.")

		}


	}
	

}//FIN DE LA FUNCIÓN