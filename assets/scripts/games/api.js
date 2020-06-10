const config = require('./../config.js')
const store = require('./../store.js')

// const getFormFields = require('../../lib/get-form-fields.js')

const createGame = function () {
  console.log(store.user.token)
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
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 0,
          value: 'X'
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
