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

const updateGame = function () {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
