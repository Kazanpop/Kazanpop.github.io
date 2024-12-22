const holst = document.querySelector('#canvas');
const pero = holst.getContext('2d');

holst.height = 800;
holst.width = 626;


const collision = (a,b) => (
			   a.x < b.x + b.width
			&& a.x + a.width > b.x
			&& a.y < b.y + b.height
			&& a.y + a.height > b.y
			) 



const keys = [];

document.addEventListener('keydown', (event) => {
	keys[event.keyCode] = true;
});

document.addEventListener('keyup', (event) => {
	keys[event.keyCode] = false;
});

class car  {
	constructor(image, x, y, isPlayer)
	{
		this.x = x;
		this.y = y;
		this.width = 60;
		this.height = 60 * (400 / 790);
		this.loaded = false;
		this.dead = true;
		this.isPlayer = isPlayer;
		this.speed = 5;
		this.image = new Image();

		var obj = this;


		this.image.src = image;
	}
	
	Update()
	{
		if(!this.isPlayer)
		{
			this.y += this.speed;
		}

		if(this.y > holst.height + 50)
		{
			this.dead = false;
		}
	}

	move() {
		if (keys[87]) this.y -= this.speed; 
		if (keys[83]) this.y += this.speed; 
		if (keys[68]) this.x += this.speed; 
		if (keys[65]) this.x -= this.speed; 
	}
}

function draw(obj){
	
	pero.drawImage
		(
			obj.image, //Image
			obj.x, //X on canvas
			obj.y, //Y on canvas
			obj.width, //Width on canvas
			obj.width //Height on canvas
		);
}



class Road
{
	constructor(image, y)
	{
		this.x = 0;
		this.y = y;
		this.loaded = false;
		this.speed = 7;
		this.width = holst.width;
		this.height = 626;
		this.image = new Image();
		this.image.addEventListener("load", function () { this.loaded = true; });
		
		this.image.src = image;
	}

	Update(road) 
	{
		this.y += this.speed; 

		if(this.y > holst.height) {
			this.y = road.y - this.height + this.speed; 
		}
	}
}

var roads = 
[
	new Road("images/road.jpg", -626),
	new Road("images/road.jpg", 0),
    new Road("images/road.jpg", 626)
];

let player = new car('images/car.png',holst.width/2,holst.height / 2,true);

let objects = [];
setInterval(function() { 
			if(objects.length < 10) 
				objects.push(new car('images/car_red.png',parseInt(Math.random() * holst.width),-200, false));
		}, 1000);



let end = false;
const mainloop = () => {
	requestAnimationFrame(mainloop);

	if (!end) {
		for (let ob of objects) {
			if (collision(ob,player)) {
				alert("проиграл!")
				end = true;	
			}
		}
		pero.clearRect(0,0,holst.width,holst.height);
		player.move();
		roads[0].Update(roads[1]);
		roads[1].Update(roads[2]);
        roads[2].Update(roads[0]);

		for (let road of roads) draw(road);
		for (let obje of objects) {
			obje.Update();
			draw(obje);
		}

		draw(player);
		

		objects = objects.filter((c) => c.dead)
	}

}

mainloop();

