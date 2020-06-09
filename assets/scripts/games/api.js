const config = require('../config.js')
const store = require('../store.js')

// const getFormFields = require('../../lib/get-form-fields.js')

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  createGame
}
