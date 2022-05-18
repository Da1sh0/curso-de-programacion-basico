let button = document.getElementById("button");
const min = document.getElementById("number-min");
const max = document.getElementById("number-max");
const multipleOne = document.getElementById("multiple-one");
const multipleTwo = document.getElementById("multiple-two");

button.addEventListener("click", generate);

function generate(){
	let one = parseInt(multipleOne.value);
	let two = parseInt(multipleTwo.value);
	
	for (let i = parseInt(min.value); i <=parseInt(max.value); i++){
		if (i%one === 0 && i%two !== 0){
			document.write(`<p style= "color:red; margin:0";> ${i} </p>`);
		}
		else if (i%two === 0 && i%one !== 0){
			document.write(`<p style= "color:blue; margin:0";> ${i} </p>`);
		}
		else if (i%one === 0 && i%two === 0){
			document.write(`<p style="color:darkgreen; margin:0"> ${i} </p>`);
		}
		else if (i%one !== 0 && i % two !== 0){
			document.write(`<p style="color:black; margin:0"> ${i} </p>`);
		}
	}
}
//Tarea:Por cada numero tiene que crear un elemento parrafo con documet.createElement
//y agregar los estilos (color y la margen)