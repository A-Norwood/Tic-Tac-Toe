const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateGame = function (event) {
  event.preventDefault()

  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

let currentPlayer = 'X'

const onUpdateGame = function () {
  const form = event.target
  const data = getFormFields(form)

  $(form).text(currentPlayer)
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
