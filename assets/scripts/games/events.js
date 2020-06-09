const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../lib/get-form-fields.js')

const onCreateGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createGame(data)
    .then(ui.creatSuccess)
    .catch(ui.createFailure)
}

module.exports = {
  onCreateGame
}
