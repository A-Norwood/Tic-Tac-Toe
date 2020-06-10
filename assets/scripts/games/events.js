const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateGame = function (event) {
  // console.log(user.token)
  event.preventDefault()

  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

let currentPlayer = 'X'

const onUpdateGame = function (event) {
  event.preventDefault()
  // console.log(event.target.id)
  if (store.game.cells[event.target.id] === 'X' || store.game.cells[event.target.id] === 'O') {
    alert('Invalid Move!')
  }

  // updates game cells using current index
  store.game.cells[event.target.id] = currentPlayer

  if ($(event.target).is(':empty')) {
    $(event.target).text(currentPlayer)
  }
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }

  api.updateGame()
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
