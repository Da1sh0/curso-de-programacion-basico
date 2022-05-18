var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var nameColor = "green"
var underlineColor = "#0ebded"

dibujarLineas(nameColor, 50, 50, 50, 200); //L
dibujarLineas(nameColor, 50, 200, 100, 200); //L
dibujarLineas(nameColor, 51, 51, 51, 201); //L
dibujarLineas(nameColor, 51, 201, 101, 201); //L
dibujarLineas(nameColor, 52, 52, 52, 202); //L
dibujarLineas(nameColor, 52, 202, 102, 202); //L
dibujarLineas(nameColor, 110, 50, 110, 200); //E
dibujarLineas(nameColor, 110, 50, 160, 50); //E
dibujarLineas(nameColor, 110, 125, 160, 125); //E
dibujarLineas(nameColor, 110, 200, 160, 200); //E
dibujarLineas(nameColor, 112, 52, 112, 202); //E
dibujarLineas(nameColor, 112, 52, 162, 52); //E
dibujarLineas(nameColor, 112, 127, 162, 127); //E
dibujarLineas(nameColor, 112, 202, 162, 202); //E
dibujarLineas(nameColor, 111, 51, 111, 201); //E
dibujarLineas(nameColor, 111, 51, 161, 51); //E
dibujarLineas(nameColor, 111, 126, 161, 126); //E
dibujarLineas(nameColor, 111, 201, 161, 201); //E
dibujarLineas(nameColor, 171, 51, 171, 201); //O
dibujarLineas(nameColor, 171, 51, 221, 51); //O
dibujarLineas(nameColor, 171, 201, 221, 201); //O
dibujarLineas(nameColor, 221, 201, 221, 51); //O
dibujarLineas(nameColor, 170, 50, 170, 200); //O
dibujarLineas(nameColor, 170, 50, 220, 50); //O
dibujarLineas(nameColor, 170, 200, 220, 200); //O
dibujarLineas(nameColor, 220, 200, 220, 50); //O
dibujarLineas(nameColor, 172, 52, 172, 202); //O
dibujarLineas(nameColor, 172, 52, 222, 52); //O
dibujarLineas(nameColor, 172, 202, 222, 202); //O
dibujarLineas(nameColor, 222, 202, 222, 52); //O
dibujarLineas(underlineColor, 47, 207, 137, 207); //R
dibujarLineas(underlineColor, 137, 207, 127, 212); //R
dibujarLineas(underlineColor, 127, 212, 232, 212); //R
dibujarLineas(underlineColor, 45, 205, 135, 205); //R
dibujarLineas(underlineColor, 135, 205, 125, 210); //R
dibujarLineas(underlineColor, 125, 210, 230, 210); //R
dibujarLineas(underlineColor, 46, 206, 136, 206); //R
dibujarLineas(underlineColor, 136, 206, 126, 211); //R
dibujarLineas(underlineColor, 126, 211, 231, 211); //R
dibujarLineas(underlineColor, 136, 205, 128, 210); //R
dibujarLineas(underlineColor, 136, 205, 129, 210); //R
dibujarLineas(underlineColor, 136, 205, 130, 210); //R

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
