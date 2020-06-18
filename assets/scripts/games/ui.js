const store = require('./../store')

const createSuccess = function (response) {
  $('.game-content').html('Create Game success!').fadeOut(10000)
  $('#new-game').addClass('success')
  $('.row').show()
  $('.message').text('It is now player X\'s turn')
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
