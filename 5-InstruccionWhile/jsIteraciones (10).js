function Mostrar()
{

	var contador=0;
	var numero;
	var acumpos=0;
	var cantpos=0;
	var acumneg=0;
	var cantneg=0;
	var ceros=0
	var numpares=0
	var promediopos;
	var promedioneg;
	var diferencia;
	//declarar contadores y variables 
	
	var respuesta=true;

	while(respuesta == true)
	{
		
		numero = prompt("Ingrese numeros.");
		numero = parseInt (numero);
	
		if (numero<0)
		{

			acumneg=acumneg+numero;
			cantneg++

		}
		if(numero>0)
		{

			acumpos=acumpos+numero;
			cantpos++

		}
		if(numero==0)
		{

			ceros++
		}
		
		if(numero %2 == 0 && numero != 0)
		{

			numpares++

		}
		
		promediopos = acumpos/cantpos;
		promedioneg = acumneg/cantneg;

		diferencia = acumpos+acumneg;
		
		respuesta = confirm ("desea ingresar otro numero?");
		contador++

	}

	

	document.write ("La Suma de numeros positivos es: "+acumpos+ "</br>");
	document.write ("La Suma de numeros negativos es: "+acumneg+ "</br>");
	document.write ("La cantidad de numeros positivos es: "+cantpos+ "</br>");
	document.write ("La cantidad de numeros negativos es: "+cantneg+ "</br>");
	document.write ("La cantidad de ceros es: "+ceros+ "</br>");
	document.write ("La cantidad de numeros pares es: "+numpares+ "</br>");
	document.write ("El promedio de los positivos es: "+promediopos+ "</br>");
	document.write ("El promedio de los negativos es: "+promedioneg+ "</br>");
	document.write ("La diferencia entre positivos y negativos es: "+diferencia+ "</br>");




}//FIN DE LA FUNCIÓN