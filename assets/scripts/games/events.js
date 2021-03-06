const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onCreateGame = function (event) {
  // console.log(user.token)
  event.preventDefault()
  // set currentplayer to always start at X
  currentPlayer = 'X'

  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

let currentPlayer = 'X'

const onUpdateGame = function (event) {
  event.preventDefault()
  // console.log(store.game.over)
  if (store.game.over === false) {
    if (store.game.cells[event.target.id] === 'X' || store.game.cells[event.target.id] === 'O') {
      return $('.invalid-move').text('Invalid Move!').show()
    }

    // updates game cells using current index
    store.game.cells[event.target.id] = currentPlayer

    if ($(event.target).is(':empty')) {
      $(event.target).text(currentPlayer)
    }
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
      $('.message').text(`It is now player ${currentPlayer}'s' turn`)
    } else {
      currentPlayer = 'X'
      $('.message').text(`It is now player ${currentPlayer}'s turn`)
    }

    winner()

    api.updateGame()
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }
}
// determines winner
const winner = function () {
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[0] !== '') {
    store.game.over = true
    return $('.message').text('Winner is ' + store.game.cells[0] + '!')
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[3] !== '') {
    store.game.over = true
    return $('.message').text('Winner is ' + store.game.cells[3] + '!')
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[6] !== '') {
    store.game.over = true
    return $('.message').text('Winner is ' + store.game.cells[6] + '!')
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[0] !== '') {
    store.game.over = true
    return $('.message').text('Winner is ' + store.game.cells[0] + '!')
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[2] !== '') {
    store.game.over = true
    return $('.message').text('Winner is ' + store.game.cells[2] + '!')
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[0] !== '') {
    store.game.over = true
    return $('.message').text('Winner is ' + store.game.cells[0] + '!')
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[1] !== '') {
    store.game.over = true
    return $('.message').text('Winner is ' + store.game.cells[1] + '!')
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[2] !== '') {
    store.game.over = true
    return $('.message').text('Winner is ' + store.game.cells[2] + '!')
  }
  console.log(store.game)
  let isATie = true
  for (let i = 0; i < store.game.cells.length; i++) {
    if (store.game.cells[i] === '') {
      isATie = false
    }
  }
  if (isATie === true) {
    store.game.over = true
    return $('.message').text('Its a tie!')
  }
}

const onGetGames = function (event) {
  event.preventDefault()
  api.getGameStats()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

module.exports = {
  onCreateGame,
  onUpdateGame,
  onGetGames
}
