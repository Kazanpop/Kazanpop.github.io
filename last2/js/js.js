
var kolpak=0;

function hide_brend(elem, hide, op, count) {
	var t = '#' + hide + elem;
	if (kolpak == 0) {
		setTimeout( async function() {
		setTimeout( async function() {
			for (var i = 1; i <= 6 ; i++) {
				var c = '#' + hide + i;
				if (c != t){
					$(c).slideUp( 1000 );
					await timer(1000);
				}
			}
		},0);
		await timer(4120);
		setTimeout( async function() {
			for (var i = 1; i <= count ; i++) {
			var c = '#' + op + i;
			$(c).slideDown(1000);
			await timer(1000);
		}},0);
		document.getElementById(hide + elem + 'b').value = "Скрыть";
		kolpak = 1;
		},0)
	}
	else {
		setTimeout( async function() {
		setTimeout( async function() {for (var i = 1; i <= count ; i++) {
			var c = '#' + op + i;
			$(c).slideUp( 1000 );
			await timer(1000);
		}},1200);
		await timer(4120);
		setTimeout( async function() {for (var i = 1; i <= 6 ; i++) {
			var c = '#' + hide + i;
			if (c != t)
			$(c).slideDown(1000);
			await timer(1000);
		}},1200);
		
		
		document.getElementById(hide + elem + 'b').value = "Узреть";
		kolpak = 0;
		},1200)
	}
}
function timer(ms) { return new Promise(res => setTimeout(res, ms)); }












function hide_bren(elem, hide, op, count) {
	var t = hide + elem;
	if (kolpak == 0) {
		for (var i = 1; i <= 6 ; i++) {
			var c = hide + i;
			document.getElementById(c).style.display = "none";
		}
		document.getElementById(t).style.display = "block";
		for (var i = 1; i <= count ; i++) {
			var c = op + i;
			document.getElementById(c).style.display = "block";
		}
		document.getElementById(hide + elem + 'b').value = "Скрыть";
		kolpak = 1;

	}
	else {
		for (var i = 1; i <= 6 ; i++) {
			var c = hide + i;
			document.getElementById(c).style.display = "block";
		}
		for (var i = 1; i <= count ; i++) {
			var c = op + i;
			document.getElementById(c).style.display = "none";
		}
		document.getElementById(hide + elem + 'b').value = "Узреть";
		kolpak = 0;
	}
}