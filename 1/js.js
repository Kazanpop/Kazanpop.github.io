








let p = document.getElementById('p-t');

p.style.color = 'grey'
p.style.fontSize = '20px'
p.style.background = 'lightgrey'
p.style.padding = '20px'




// let boxes = document.getElementsByClassName('box');
// console.log(boxes);

// for (let i = 0; i < boxes.length; i++ ){
// 	console.log('boxes[i]: ', boxes[i]);
// 	boxes[i].style.width = '100px';
// 	boxes[i].style.height = '100px';
// 	boxes[i].style.background = 'black'
// 	boxes[i].style.margin = '10px'
// 	console.log(boxes[i]);
// }

// for (let i = 0; i < boxes.length; i+=2 ){
// 	boxes[i].style.background = 'red'
// }





let colors = ['red', 'green', 'black', 'purple', 'blue', 'yellow', 'brown']
let boxes = document.getElementsByClassName('box');
console.log(boxes);

for (let i = 0; i < boxes.length; i++ ){
	console.log('boxes[i]: ', boxes[i]);
	boxes[i].style.width = '100px';
	boxes[i].style.height = '100px';
	boxes[i].style.background = colors[Math.floor(Math.random() * 7)]
	boxes[i].style.margin = '10px'
	boxes[i].style.display = 'inline-block'
	console.log(boxes[i]);
}





// можно создавать теги!

let div = document.createElement('div');
div.className = 'new';
div.style.height = '50px';
div.style.width = '50px';
div.style.background = 'cyan'
document.body.appendChild(div)//добавляет в конец
// смотрим куда он вставился?


document.body.insertBefore(div, p) // добавили перед текстовым блоком!


div.animate(
	[
		{transform: 'rotate(90deg)'}
	],
	{
		duration: 2500,
		iterations: Infinity
	}
)




for (let i = 0; i < boxes.length; i++ ){
	boxes[i].animate([

			{transform: 'rotate(180deg)'}

		],

		{
			duration: 2500,
			iterations: Infinity
		}
		)
	
}




let r = document.createElement('div');
r.className = 'right';
r.style.height = '50px';
r.style.width = '50px';
r.style.margin = '100px'
r.style.background = 'blue'
document.body.appendChild(r)//добавляет в конец

r.animate(
	[
		{transform: 'scale(1) rotate(90deg)'},
		// {transform: 'rotate(180deg)'},
		{transform: 'scale(0.5) rotate(90deg)'},
		// {transform: 'rotate(180deg)'},
		{transform: 'scale(1.5) rotate(90deg)'},
		// {transform: 'rotate(180deg)'},
		{transform: 'scale(1)'}
	],
	{
		duration: 2500,
		iterations: Infinity
	}
)