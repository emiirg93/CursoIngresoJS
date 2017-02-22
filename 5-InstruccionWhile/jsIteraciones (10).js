function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var numero;
	var acumpos=0;
	var acumneg=0;
	
	var cantpos=0;
	var cantneg=0;
	
	var cantcero=0;
	
	var cantpar=0;
	
	var prompos;
	var promneg;
	var diferencia;
	
	var respuesta ="si";

	while(respuesta!="no")
	{
		
		numero = prompt ("Escriba Un Numero.");
		numero = parseInt (numero);
	
	if (numero == 0)
	{
		contcero++;
	}
	
	else
	{
		if (numero <0)
		{

			cantneg = acumneg + numero;
			cantneg++;

		}

		else
		{
		
			cantpos = acumpos + numero;
			cantpos++;

		}

	}

	if (numero %2 == 0 && numero != 0)
	{

		cantpar++

	}	

	prompos = acumpos
}//FIN DE LA FUNCIÓN