var txtLinesNumber1 = document.getElementById("textonumero1");
var txtLinesNumber2 = document.getElementById("textonumero2");
var btnDraw = document.getElementById("botoon");
var colorDraw = document.getElementById("colorsote");
var secondColorDraw = document.getElementById("segundocolor");
var txtSecondLinesNumber = document.getElementById("segundotexto");

btnDraw.addEventListener("click", dibujoPorClick);
btnDraw.addEventListener("click", segundoDibujoPorClick)

var draw = document.getElementById("dibujito");
var secondDraw = document.getElementById("segundodibujo");
var ancho = draw.width;

var lienzo = draw.getContext("2d");
var segundoLienzo = secondDraw.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarSegundaLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  segundoLienzo.beginPath();
  segundoLienzo.strokeStyle = color;
  segundoLienzo.moveTo(xinicial, yinicial);
  segundoLienzo.lineTo(xfinal, yfinal);
  segundoLienzo.stroke();
  segundoLienzo.closePath();
}


function dibujoPorClick()
{
  var lineas1 = parseInt(txtLinesNumber1.value);
  var lineas2 = parseInt(txtLinesNumber2.value);
  var sumalineas = lineas1 + lineas2;
  console.log(sumalineas);
  var colorsito = colorDraw.value;
  var linea = 0;
  var espacio = ancho / sumalineas;
  console.log(colorsito);
  

  while (linea < sumalineas)
  {
    a = 500;
    b = espacio * linea;
    c = espacio * (linea + 1);
    f = 0;
    dibujarLinea(colorsito, f, b, c, a); //Esquina inferios Izquierda
    dibujarLinea(colorsito, b, f, a, c); // Esquina Superior Derecha
    dibujarLinea(colorsito, a, b, (a - c), a); //Esquina inferior Derecha
    dibujarLinea(colorsito, f, (a - b), c, f); // Esquian Superior Izquierda
    linea = linea + 1;
    console.log(sumalineas);
  }
  dibujarLinea(colorsito, 0, 0, 0, 500);
  dibujarLinea(colorsito, 0, 500, 500, 500);
  dibujarLinea(colorsito, 500, 500, 500, 0);
  dibujarLinea(colorsito, 500, 0, 0, 0);
}

function segundoDibujoPorClick()
{
  var lineasFor = parseInt(txtSecondLinesNumber.value);
  var segundocolorsito = secondColorDraw.value;
  var segundoEspacio = ancho / lineasFor;
  console.log(secondColorDraw.value);

  for ( var lineasF = 0; lineasF < lineasFor; lineasF++)
  {
    a = 500;
    b = segundoEspacio * lineasF;
    c = segundoEspacio * (lineasF + 1);
    f = 0;
    dibujarSegundaLinea(segundocolorsito, f, b, c, a); //Esquina inferios Izquierda
    dibujarSegundaLinea(segundocolorsito, b, f, a, c); // Esquina Superior Derecha
    dibujarSegundaLinea(segundocolorsito, a, b, (a - c), a); //Esquina inferior Derecha
    dibujarSegundaLinea(segundocolorsito, f, (a - b), c, f); // Esquian Superior Izquierda
  }
  dibujarSegundaLinea(segundocolorsito, 0, 0, 0, 500);
  dibujarSegundaLinea(segundocolorsito, 0, 500, 500, 500);
  dibujarSegundaLinea(segundocolorsito, 500, 500, 500, 0);
  dibujarSegundaLinea(segundocolorsito, 500, 0, 0, 0);
}