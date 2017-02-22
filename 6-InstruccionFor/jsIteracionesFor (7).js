function Mostrar()
{


	var i;
	var numero;
	var cantidaddiv = 0;

	numero = prompt ("Ingrese Numero.");
	numero = parseInt(numero);

	for (i = 1 ; i <=numero ; i++)
	{
		if (numero % i == 0)
		{
			document.write (i+ "</br>");
			cantidaddiv++;
		}
	}

	document.write("La cantidad de numeros divisores encontrados es : "+cantidaddiv);



}//FIN DE LA FUNCIÓN