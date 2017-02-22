function Mostrar()
{

	var i;
	var numero;
	var cantidadpar = 0;

	numero = prompt ("Ingrese Numero.");
	numero = parseInt(numero);

	for (i = 1 ; i <=numero ; i++)
	{
		if (i % 2 == 0)
		{
			document.write (i+ "</br>");
			cantidadpar++;
		}
	}

	document.write("La cantidad de numeros pares es : "+cantidadpar);
}//FIN DE LA FUNCIÓN