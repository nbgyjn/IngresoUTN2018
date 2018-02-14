function Mostrar()
{
//tomo la edad  

var edad
var estado

edad = document.getElementById("edad").Value
estado = codument.getElementById("estadoCivil").Value

if( edad<18 && estado != "Soltero")
{
    alert("es ustedes muy pequeño para NO ser soltero")

}
else
{
alert("algo fallo")
}


}//FIN DE LA FUNCIÓN