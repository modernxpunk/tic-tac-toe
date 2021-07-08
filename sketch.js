function getBoard() {
	let play = []
	let countOfRows = document.querySelectorAll('.row').length
	for (let i = 0; i < countOfRows; i++) {
		let tmp = []
		for (let j = 0; j < countOfRows; j++) tmp.push('.')
		play.push(tmp)
	}
	return play
}

function isWin(play) {
	const rows = document.querySelectorAll('.row')
	const winner = document.querySelector('.winner')
	const state = whoWin(play)

	if (state !== 'continue') {
		if (state === 'O')
			winner.innerHTML = 'O win'
		else if (state === 'X')
			winner.innerHTML = 'X win'
		else
			winner.innerHTML = 'draw'

		setTimeout(() => {
			winner.innerHTML = ''
			for (let i = 0; i < rows.length; i++) {
				const cells = rows[i].querySelectorAll('.cell')
				for (let j = 0; j < cells.length; j++) {
					cells[j].innerHTML = ''
					play[i][j] = '.'
				}
			}
		}, 1500)
	}
}

function addListeners() {
	const rows = document.querySelectorAll('.row')
	for (let i = 0; i < rows.length; i++) {
		const cells = rows[i].querySelectorAll('.cell')
		for (let j = 0; j < cells.length; j++) {
			cells[j].addEventListener('click', () => {
				if (!cells[j].innerHTML) {
					const circle = document.createElement('div')
					play[i][j] = human.char
					circle.className = human.name
					cells[j].append(circle)
					isWin(play)

					const cross = document.createElement('div')
					let move = bestMove(play)
					play[move[0]][move[1]] = ai.char
					cross.className = ai.name
					rows[move[0]].querySelectorAll('.cell')[move[1]].append(cross)
					isWin(play)	
				}
			})
		}
	}
}