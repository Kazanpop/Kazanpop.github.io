

let iks = document.querySelector('#iks');

let panel = document.querySelector('#panel');

iks.onclick = function( ) {

	if ( panel.classList.contains('hide') ) {
			panel.classList.remove('hide');

			panel.classList.add('show' );
		}
		else
		{
			panel.classList.add('hide');

			panel.classList.remove('show');
	}
}






let k = document.querySelector('#korob');

k.onclick = function(){
	if (k.classList.contains('net')){
		k.classList.remove('net')
		k.classList.add('da')
	}
	else {
		k.classList.remove('da')
		k.classList.add('net')
	}
}
