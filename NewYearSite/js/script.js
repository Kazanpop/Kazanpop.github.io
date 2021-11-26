function start() {
	let a = document.getElementById('start');
	let b = document.getElementById('music');
	let c = document.getElementById('main');
	document.getElementById('player').play();
	a.style.display= "none";
	b.style.display= "none";
	c.style.display= "block";
	alert("Откройте сайт на полный экран для сборки всего пазла: Fn + F11 после закрытия этого сообщения!");
}
// Массив с названиями песен
let playlist = [
    '1.mp3',
    '2.mp3'
];
let audio = document.getElementById("player");
let next = document.querySelector(".next");
let treck; // Переменная с индексом трека
window.onload = function() {
    treck = 0; // Присваиваем переменной ноль
}
function switchTreck (numTreck) {
    // Меняем значение атрибута src
    document.getElementById("player").src = 'music/' + playlist[numTreck];
    // Назначаем время песни ноль
    document.getElementById("player").currentTime = 0;
    // Включаем песню
    document.getElementById("player").play();
}
function ne() {
    // Проверяем что переменная treck больше трёх
    if (treck < 1) { // Если да, то
        treck++; // Увеличиваем её на один
        switchTreck(treck); // Меняем песню 
    } else { // Иначе
        treck = 0; // Присваиваем ей ноль
        switchTreck(treck); // Меняем песню
    }
}
audioPlay = setInterval(function() {
	let audio = document.getElementById("player");
        // Получаем значение на какой секунде песня
        let audioTime = Math.round(audio.currentTime);
        // Получаем всё время песни
        let audioLength = Math.round(audio.duration)
        // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
        // И проверяем что переменная treck меньше четырёх
        if (audioTime == audioLength && treck < 1) {
            treck++; // То Увеличиваем переменную 
            switchTreck(treck); // Меняем трек
        // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
        } else if (audioTime == audioLength && treck >= 1) {
            treck = 0; // То присваиваем treck ноль
            switchTreck(treck); //Меняем трек
        }
    }, 10)

function stope() {
	document.getElementById('player').pause();
}

function d1() {
	t = document.getElementById('f1');
	ris(t);
	document.getElementById('g1').style.display=("none");
	
}
function d2() {
	t = document.getElementById('f2');
	ris(t);
	document.getElementById('g2').style.display=("none");
}
function d3() {
	t = document.getElementById('f3');
	ris(t);
	document.getElementById('g3').style.display=("none");
}
function d4() {
	t = document.getElementById('f4');
	ris(t);
	document.getElementById('g4').style.display=("none");
}
function d5() {
	t = document.getElementById('f5');
	ris(t);
	document.getElementById('g5').style.display=("none");
}
function d6() {
	t = document.getElementById('f6');
	ris(t);
	document.getElementById('g7').style.display=("none");
}
function d7() {
	t = document.getElementById('f7');
	ris(t);
	document.getElementById('g8').style.display=("none");
}
function d8() {
	t = document.getElementById('f8');
	ris(t);
	document.getElementById('g6').style.display=("none");
}

function ris(a){
	a.style.display=("block")
	let start = Date.now(); // запомнить время начала
	let r=0;
	let timer = setInterval(function() {
	  // сколько времени прошло с начала анимации?
	  let timePassed = Date.now() - start;

	  	if (timePassed >= 2000) {
		    clearInterval(timer); // закончить анимацию через 2 секунды
		    return;
	  	}

  		// отрисовать анимацию на момент timePassed, прошедший с начала анимации
  		draw(timePassed);

	}, 20);
	
// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
function draw(timePassed) {
  a.style.opacity = r+0.005;
  r=r+0.05;
}
}

