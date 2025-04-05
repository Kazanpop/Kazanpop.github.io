document.addEventListener('scroll', function(){
	// получим позицию скролла окна браузера
	let scroll = window.pageYOffset
	console.log(scroll);
	let nav = document.querySelector('.navbar')
	let a = nav.getAttribute('scroll-bg')
	let b = nav.getAttribute('offscroll')
	if (scroll > 2) {
		nav.classList.remove(b)
		nav.classList.add(a)
		nav.setAttribute("data-bs-theme", "dark")
	}
	else {
		nav.classList.remove(a)
		nav.classList.add(b)
		nav.removeAttribute("data-bs-theme")
	}
})









let drop = document.querySelector('.dropka')
let dropBTN = document.querySelector('.drop-btn')
let dropper = document.querySelector('.dropper')
let op = false

dropBTN.addEventListener('click', function(){
	if (!op){
		dropper.style.display = 'block'
		op = true
	}
	else {
		dropper.style.display = 'none'
		op = false
	}
	
})