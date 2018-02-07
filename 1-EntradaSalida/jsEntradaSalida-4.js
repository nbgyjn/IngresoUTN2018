/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{	var nombre
	//el usuario ingresa dato
	nombre = prompt ("ingrese su nombre")
	//remplaza el dato  se lee de derecha a izquierda 
	document.getElementById("elNombre").value= nombre ;
	


	
}

