let btn = document.querySelector('#btn-tab');
let tab = document.querySelector('#table')


btn.addEventListener('click', function () {
	let cols = tab.rows[1].cells.length
	newRow = tab.insertRow()
	for (var i = 0; i < cols; i++) {
		newCols = newRow.insertCell()
	}
})



let btn2 = document.querySelector('#btn-tab2');

btn2.addEventListener('click', function () {
	let colsCount = tab.rows.length
	console.log(colsCount);
	let rows = tab.querySelectorAll('tr')
	console.log(rows);
	rows.forEach(node => {
		newCols = node.insertCell()
	})
})