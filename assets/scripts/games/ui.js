const store = require('./../store')

const createSuccess = function (response) {
  $('.game-content').html('Create Game success!')
  $('#new-game').addClass('success')
  $('.row').show()
  $('.message').text('It is now X\'s turn')
  store.game = response.game
}
const createFailure = function () {
  $('#new-game').text('Create Game failed!')
  $('#new-game').show()
}

const updateGameSuccess = function () {
  $('.updateGame').text('Show letter')
  $('.updateGame').addClass('success')
}

const updateGameFailure = function () {
  $('.updateGame').text('Show letter failed')
  $('.updateGame').addClass('failure')
}

module.exports = {
  createSuccess,
  createFailure,
  updateGameSuccess,
  updateGameFailure
}
