function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
   
    case "Julio":
    case "Agosto":
        
        alert ("Abrigate Que Hace Frio.")
        break;
    
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        
        alert ("Falta Para El Invierno");
        break;
    
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        
        alert("Ya pasamos el frio ahora calor.");
        break; 	
    }


}//FIN DE LA FUNCIÓN