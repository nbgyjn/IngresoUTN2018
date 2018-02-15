function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	nota = Math.floor(Math.random()*10)+1;

	nota = document.getElementById("FormIngreso").value;

	if (nota == 9 or nota == 10)
	{alert("tu nota es : "+nota+" exlente!!")}

	else if (nota >= 4 && not < 9)
	{alert("tu nota es : "+nota+" aprobaste")}

	else ()
	{alert("tu nota es : "+nota+" vamos, la proxima se puede ! ")}
}//FIN DE LA FUNCIÓN