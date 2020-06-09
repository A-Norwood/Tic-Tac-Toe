// const store = require('./store')

const createSuccess = function (response) {
  $('#new-game').text('Create Game success!')
  $('#new-game').show()
  $('#new-game').removeClass()
  $('#new-game').addClass('success')
}
const createFailure = function () {
  $('#new-game').text('Create Game failed!')
  $('#new-game').show()
}

module.exports = {
  createSuccess,
  createFailure
}
