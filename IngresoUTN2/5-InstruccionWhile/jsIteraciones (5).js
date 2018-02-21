function Mostrar()
{

var sexo = prompt("ingrese f ó m .");



document.getElementById('Sexo').value=sexo;

while (sexo != "f" || sexo != "m" )
	{   sexo = prompt(" error, ingrese f ó m .");
        document.getElementById('Sexo').value=sexo;



    }

alert("tu sexo es : "+sexo)

}//FIN DE LA FUNCIÓN