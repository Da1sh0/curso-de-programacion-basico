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
		const pr = document.createElement("p");
		if (i%one === 0 && i%two !== 0){
			pr.innerHTML = i; document.body.appendChild(pr);
		}
		else if (i%two === 0 && i%one !== 0){
			pr.innerHTML = i; document.body.appendChild(pr);
		}
		else if (i%one === 0 && i%two === 0){
			pr.innerHTML = i; document.body.appendChild(pr);
		}
		else if (i%one !== 0 && i % two !== 0){
			pr.innerHTML = i; document.body.appendChild(pr);
		}
	}
}
//Tarea:Por cada numero tiene que crear un elemento parrafo con documet.createElement
//y agregar los estilos (color y la margen)