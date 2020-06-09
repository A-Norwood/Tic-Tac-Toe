// const store = require('./store')

const createSuccess = function (response) {
  $('.game-content').html('Create Game success!')
  $('#new-game').addClass('success')
  $('.row').show()
}
const createFailure = function () {
  $('#new-game').text('Create Game failed!')
  $('#new-game').show()
}

const updateGameSuccess = function () {
  $('.updateGame').text('Show letter')
  $('.updateGame').show()
  $('.updateGame').removeClass()
  $('.updateGame').addClass('success')
}

const updateGameFailure = function () {
  $('.updateGame').text('Show letter failed')
  $('.updateGame').show()
  $('.updateGame').removeClass()
  $('.updateGame').addClass('failure')
}

module.exports = {
  createSuccess,
  createFailure,
  updateGameSuccess,
  updateGameFailure
}
