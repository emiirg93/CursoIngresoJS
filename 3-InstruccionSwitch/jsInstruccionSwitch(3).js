function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch (mesDelAño)
	{
		case "Febrero":

			alert ("Este Mes No Tiene Mas De 29 Dias")
			break;

			default:

				alert ("Este Mes Tiene 30 o Mas Dias")
				break;
	}
	


}//FIN DE LA FUNCIÓN