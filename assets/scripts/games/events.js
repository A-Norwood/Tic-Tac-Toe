const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

// const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateGame = function (event) {
  // console.log(user.token)
  event.preventDefault()
  // store = {}
  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

let currentPlayer = 'X'

const onUpdateGame = function (event) {
  event.preventDefault()
  console.log(store)
  if (store.game.over === false) {
    if (store.game.cells[event.target.id] === 'X' || store.game.cells[event.target.id] === 'O') {
      return $('.invalid-move').text('Invalid Move!').fadeOut(4000)
    }

    // updates game cells using current index
    store.game.cells[event.target.id] = currentPlayer

    if ($(event.target).is(':empty')) {
      $(event.target).text(currentPlayer)
    }
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
      $('.message').text('It is now player O\'s turn')
    } else {
      currentPlayer = 'X'
      $('.message').text('It is now player X\'s turn')
    }

    winner()

    api.updateGame()
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }
}

const winner = function () {
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[0] !== '') {
    store.game.over = true
    console.log(store.game)
    return $('.message').text('Winner is ' + store.game.cells[0])
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[3] !== '') {
    store.game.over = true
    console.log(store.game)
    return $('.message').text('Winner is ' + store.game.cells[3])
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[6] !== '') {
    store.game.over = true
    console.log(store.game)
    return $('.message').text('Winner is ' + store.game.cells[6])
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[0] !== '') {
    store.game.over = true
    console.log(store.game)
    return $('.message').text('Winner is ' + store.game.cells[0])
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[2] !== '') {
    store.game.over = true
    console.log(store.game)
    return $('.message').text('Winner is ' + store.game.cells[2])
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[0] !== '') {
    store.game.over = true
    console.log(store.game)
    return $('.message').text('Winner is ' + store.game.cells[0])
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[1] !== '') {
    store.game.over = true
    console.log(store.game)
    return $('.message').text('Winner is ' + store.game.cells[1])
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[2] !== '') {
    store.game.over = true
    console.log(store.game)
    return $('.message').text('Winner is ' + store.game.cells[2])
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
  console.log(store.game)
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
