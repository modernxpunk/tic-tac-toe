const play = getBoard()
const circle = 'O'.repeat(play.length)
const cross = 'X'.repeat(play.length)

if (human.char === 'O') {
	human.name = 'circle'
	ai.char = 'X'
	ai.name = 'cross'
	state.X = 1
	state.O = -1
} else if (human.char === 'X') {
	human.name = 'cross'
	ai.char = 'O'
	ai.name = 'circle'
	state.X = -1
	state.O = 1
}

addListeners()

function whoWin(play) {
	let mainDiagonal = ''
	let sideDiagonal = ''
	for (let i = 0; i < play.length; i++) {
		mainDiagonal += play[i][i]
		sideDiagonal += play[i][play.length - i - 1]
		
		if (play[i].join('').indexOf(circle) === 0) return 'O'
		if (play[i].join('').indexOf(cross) === 0) return 'X'

		let vertical = play.reduce((acc, cur, j) => [...acc, play[j][i]], [])
		if (vertical.join('').indexOf(circle) === 0) return 'O'
		if (vertical.join('').indexOf(cross) === 0) return 'X'

	}
	if (mainDiagonal.indexOf(circle) === 0 || sideDiagonal.indexOf(circle) === 0) return 'O'
	if (mainDiagonal.indexOf(cross) === 0 || sideDiagonal.indexOf(cross) === 0) return 'X'

	for (let i = 0; i < play.length; i++) 
		for (let j = 0; j < play.length; j++)
			if (play[i][j] === '.')
				return 'continue'

	return 'draw'
}