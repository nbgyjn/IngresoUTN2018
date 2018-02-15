function Mostrar()
{
//tomo la hora 
//con el parseint transformo el valor en numero (no en cadena) para poder trabajar con el
var laHora = parseInt(document.getElementById('hora').value);

switch(laHora)
{
    case 7 :
    case 8 :
    case 9 :
    case 10 :
    case 11 :
        alert("es de mañana ! ")
        break

    default :
        alert ("es de tarde! ")
        break 





}
	
	



}//FIN DE LA FUNCIÓN