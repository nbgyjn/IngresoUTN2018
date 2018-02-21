function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
    {   
        case "Febrero" :
            alert ("este mes tiene 29 dias")
            break
        
        default :
        alert ("este mes tiene 30 o mas dias ! ")
        break

	}//FIN DE LA FUNCIÓN