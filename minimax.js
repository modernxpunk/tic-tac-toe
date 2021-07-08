function minimax(play, isMaximizing) {
	let result = whoWin(play)
	if (result !== 'continue')
		return state[result]

	let emptyCells = getEmptyCells(play)
	let bestScore = isMaximizing ? -Infinity : Infinity

	if (isMaximizing) {
		for (cell of emptyCells) {
			let i = cell.i
			let j = cell.j
			play[i][j] = ai.char
			bestScore = Math.max(bestScore, minimax(play, false))
			play[i][j] = '.'
		}
	} else {
		for (cell of emptyCells) {
			let i = cell.i
			let j = cell.j
			play[i][j] = human.char
			bestScore = Math.min(bestScore, minimax(play, true))
			play[i][j] = '.'
		}
	}
	return bestScore
}

function bestMove(play) {
	let bestScore = -Infinity

	let move
	let emptyCells = getEmptyCells(play)
	for (cell of emptyCells) {
		let i = cell.i
		let j = cell.j
		play[i][j] = ai.char
		let score = minimax(play, false)
		play[i][j] = '.'
		if (score > bestScore) {
			bestScore = score
			move = [i, j]
		}
	}
	return move
}

function getEmptyCells(play) {
	let emptyCells = []
	for (let i = 0; i < play.length; i++)
		for (let j = 0; j < play.length; j++)
			if (play[i][j] === '.')
				emptyCells.push({i, j})
	return emptyCells
}