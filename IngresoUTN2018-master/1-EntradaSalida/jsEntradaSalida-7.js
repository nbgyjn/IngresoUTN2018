/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	 var num1;
    var num2;
    var suma;

    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt( document.getElementById("numeroDos").value);

    suma = num1 + num2;

    alert ("la suma de los numeros ingresados es : " + suma );
	
}

function restar()
{
    var num1;
    var num2;
    var resta;

    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt( document.getElementById("numeroDos").value);

    resta = num1 - num2;

    alert ("la resta de los numeros ingresados es : " + resta );
	
}

function multiplicar()
{ 
    var num1;
    var num2;
    var res;

    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt( document.getElementById("numeroDos").value);

    res = num1 * num2;

    alert ("la multiplicacion de los numeros ingresados es : " + res );
	
}

function dividir()
{
    var num1;
    var num2;
    var res;

    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt( document.getElementById("numeroDos").value);

    res = num1 / num2;

    alert ("la divicion de los numeros ingresados es : " + res );
}

