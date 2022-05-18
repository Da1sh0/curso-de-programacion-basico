var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var colorsito = "lightblue";

while (l < lineas)
{
  a = 300;
  b = 10 * l;
  c = 10 * (l + 1);
  f = 0;
  dibujarLinea(colorsito, f, b, c, a);
  dibujarLinea(colorsito, b, f, a, c);
  dibujarLinea(colorsito, a, b, (a - c), a);
  dibujarLinea(colorsito, f, (a - b), c, f);
  l = l + 1;
}
dibujarLinea(colorsito, 0, 0, 0, 300);
dibujarLinea(colorsito, 0, 300, 300, 300);
dibujarLinea(colorsito, 300, 300, 300, 0);
dibujarLinea(colorsito, 300, 0, 0, 0);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
