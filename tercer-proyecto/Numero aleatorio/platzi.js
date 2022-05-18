var z;
var resultNumber = document.getElementById("number-first");
var minimum = document.getElementById("number-min");
var maximum = document.getElementById("number-max");
var buttonFor = document.getElementById("button-for");
var buttonWhile = document.getElementById("button-while");
const number = 1;

buttonFor.addEventListener("click", generarNumeroFor);
buttonWhile.addEventListener("click", generarNumeroWhile);


function generarNumeroFor()
{
	for (let i=0; i<resultNumber.value; i++)
	{
		z = aleatorio( parseInt(minimum.value), parseInt(maximum.value), number);
		document.write(z + ", ");
	}
}
function generarNumeroWhile()
{
	var i = 0;
	while (i<resultNumber.value)
	{
		z = aleatorio( parseInt(minimum.value), parseInt(maximum.value), number);
		document.write(z + "- ")
		i = i + 1;
	}
}

function aleatorio(min, max, num)
	{
		var resultado;
		resultado = Math.floor(Math.random() * (max - min + num)) + min;
		return resultado;
	}
