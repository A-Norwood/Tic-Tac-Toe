const store = require('./../store')

const createSuccess = function (response) {
  $('.game-content').html('Create Game success!').show()
  // $('#new-game').addClass('success')
  $('.row').show()
  $('.message').text('It is now player X\'s turn')
  $('.message').show()
  $('.invalid-move').hide()
  // $('#change-pw').text('Password changed successfully').hide()
  $('#0').text('')
  $('#1').text('')
  $('#2').text('')
  $('#3').text('')
  $('#4').text('')
  $('#5').text('')
  $('#6').text('')
  $('#7').text('')
  $('#8').text('')

  store.game = response.game
  console.log(store.game.cells)
}

const createFailure = function () {
  $('#new-game').text('Create Game failed!')
  $('#new-game').show()
}

const updateGameSuccess = function () {
  $('.updateGame').text('Show letter')
  $('.invalid-move').hide()
  $('.game-content').html('Create Game success!').hide()
}

const updateGameFailure = function () {
  $('.updateGame').text('Show letter failed')
  $('.updateGame').addClass('failure')
}

const onGetGamesSuccess = function (response) {
  $('.message').text('Here are your total games: ' + response.games.length)
}

const onGetGamesFailure = function () {
  $('.message').text('Unable to retrieve total games')
}
module.exports = {
  createSuccess,
  createFailure,
  updateGameSuccess,
  updateGameFailure,
  onGetGamesSuccess,
  onGetGamesFailure
}
