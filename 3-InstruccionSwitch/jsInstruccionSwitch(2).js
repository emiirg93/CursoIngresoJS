function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) 

	{
	case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":

    	alert ("Falta Para El Invierono")
    	break;

    case "Julio":
    case "Agosto":

    	alert ("Abrigate Que Hace Frio")
    	break;

    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":

    	alert ("Ya Pasamos El Frio, Ahora Calor")
    	break;
	}

}//FIN DE LA FUNCIÓN