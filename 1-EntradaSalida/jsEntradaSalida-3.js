/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
    //asgino variable   
	var nombre;
    //tomo dato del html,el id tiene que estar escrito igual.
    nombre = document.getElementById("elNombre").value;
    //muestro la variable
    alert(nombre);

}


