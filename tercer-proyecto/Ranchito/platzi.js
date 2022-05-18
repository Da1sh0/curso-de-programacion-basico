const ville = document.getElementById("area");
const paper = ville.getContext("2d");

const bottom =
{
	url: "background.png",
	loadOK: false
}
const pig =
{
	url: "pig.png",
	loadOK: false
};
const cow =
{
	url: "cow.png",
	loadOK: false
};
const giraffe =
{
	url: "giraffe.png",
	loadOK: false
};

bottom.object = new Image();
bottom.object.src = bottom.url;
bottom.object.addEventListener("load", loadbottom);

pig.object = new Image();
pig.object.src = pig.url;
pig.object.addEventListener("load", loadpig);

cow.object = new Image();
cow.object.src = cow.url;
cow.object.addEventListener("load", loadcow);

giraffe.object = new Image();
giraffe.object.src = giraffe.url;
giraffe.object.addEventListener("load", loadgiraffe);

function loadbottom()
{
	bottom.loadOK = true;
	draw();
}
function loadpig()
{
	pig.loadOK = true;
	draw();
}
function loadcow()
{
	cow.loadOK = true;
	draw();
}
function loadgiraffe()
{
	giraffe.loadOK = true;
	draw();
}

function draw()
{
	if (bottom.loadOK)
	{
		paper.drawImage(bottom.object, 0, 0);	
	}
	if (pig.loadOK)
	{
		for (let p = 0; p<4; p++)
		{
			const x = random(0, 420);
			const y = random(0, 420);
			paper.drawImage(pig.object, x, y);
		}
	}
	if (cow.loadOK)
	{
		for (let p = 0; p<2; p++)
		{
			const x = random(0, 420);
			const y = random(0, 420);
			paper.drawImage(cow.object, x, y);
		}
	}
	if (giraffe.loadOK)
	{
		for (let p = 0; p<3; p++)
		{
			const x = random(0, 420);
			const y = random(0, 420);
			paper.drawImage(giraffe.object, x, y);
		}
	}
}

function random(min, max)
{
	let result;
	result = Math.floor(Math.random() * (max - min + 1)) + min;
	return result;
}
