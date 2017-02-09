function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota = Math.floor((Math.random() * 10) + 1);

	if (nota >8){

		alert (nota+" Excelente");
	} 

	else{

		if (nota >3){

			alert (nota+" Aprobo");
		}
		
		else {

			alert (nota+" Vamos La Proxima Se Puede");
		}
		
		}

}//FIN DE LA FUNCIÓN